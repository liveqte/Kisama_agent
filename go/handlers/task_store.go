package handlers

// 💾 任务持久化 (0.5.7, docs/API.MD 十三)
// - KSTORE_KEY 环境变量为唯一密钥来源 (base64/hex 32 字节), 不落盘; 未设置/非法则
//   持久化关闭 (fail-closed, 绝不明文落盘)
// - KSTORE 指定存储路径, off/0 显式关闭; 缺省 $HOME/.tmp/store.enc
// - 文件内容复用 0.5.6 响应加密容器 Base64(JSON{nonce,tag,ciphertext}) (crypto.Encrypt/DecryptAES256GCM),
//   明文为 {"magic","version","saved_at","data":{onetasks,crontasks}}
// - 仅持久化任务定义 (不含执行日志); 原子写 (tmp+Sync+rename); I/O 故障仅记日志降级,
//   绝不影响内存任务、请求成功与 agent 启动

import (
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/liveqte/kisama_agent/go/crypto"
	"github.com/liveqte/kisama_agent/go/logger"
)

const (
	taskStoreMagic   = "kisama-store"
	taskStoreVersion = 1
)

type taskStore struct {
	mu          sync.Mutex
	enabled     bool
	locked      bool   // true=加载到高版本数据, 禁止覆盖写
	path        string
	keyB64      string // Encrypt/DecryptAES256GCM 使用 base64 编码密钥
	lastSavedAt string
}

type taskStoreDoc struct {
	Magic   string        `json:"magic"`
	Version int           `json:"version"`
	SavedAt string        `json:"saved_at"`
	Data    taskStoreData `json:"data"`
}

type taskStoreData struct {
	Onetasks  []string          `json:"onetasks"`
	Crontasks map[string]string `json:"crontasks"`
}

// initTaskStore resolves KSTORE/KSTORE_KEY env; 永不失败, 未启用时返回零值 store
func initTaskStore() *taskStore {
	s := &taskStore{}
	rawPath := strings.TrimSpace(os.Getenv("KSTORE"))
	switch strings.ToLower(rawPath) {
	case "off", "0", "none", "false":
		logger.Infof("[TaskStore] 💾 KSTORE=off, 任务持久化已显式关闭")
		return s
	}
	rawKey := strings.TrimSpace(os.Getenv("KSTORE_KEY"))
	if rawPath == "" {
		rawPath = defaultTaskStorePath()
	}
	key := parseTaskStoreKey(rawKey)
	if key == nil {
		if rawKey != "" {
			logger.Errorf("[TaskStore] ❌ KSTORE_KEY 非法 (需 base64/hex 编码的 32 字节), 任务持久化保持关闭")
		} else {
			logger.Infof("[TaskStore] 💾 KSTORE_KEY 未设置, 任务持久化未启用")
		}
		return s
	}
	s.path = rawPath
	s.keyB64 = base64.StdEncoding.EncodeToString(key)
	s.enabled = true
	logger.Infof("[TaskStore] 💾 任务持久化已启用: %s", s.path)
	return s
}

// defaultTaskStorePath 与 py/js 对齐: $HOME/.tmp/store.enc, HOME 不可用时降级当前工作目录
func defaultTaskStorePath() string {
	home, err := os.UserHomeDir()
	if err != nil || home == "" {
		if home, err = os.Getwd(); err != nil {
			home = "."
		}
	}
	return filepath.Join(home, ".tmp", "store.enc")
}

// parseTaskStoreKey 接受 hex (64 字符) 或 std base64, 解码后必须恰为 32 字节
func parseTaskStoreKey(raw string) []byte {
	if raw == "" {
		return nil
	}
	if len(raw) == 64 {
		if key, err := hex.DecodeString(raw); err == nil && len(key) == 32 {
			return key
		}
	}
	key, err := base64.StdEncoding.DecodeString(raw)
	if err != nil || len(key) != 32 {
		return nil
	}
	return key
}

// load returns (onetasks, crontasks); 文件缺失/损坏一律安全降级为空表
func (s *taskStore) load() ([]string, map[string]string) {
	if !s.enabled {
		return nil, nil
	}
	s.mu.Lock()
	defer s.mu.Unlock()

	payload, err := os.ReadFile(s.path)
	if err != nil {
		if !os.IsNotExist(err) {
			logger.Errorf("[TaskStore] ❌ 存储文件读取失败 (以空任务启动): %v", err)
		}
		return nil, nil // 文件缺失 = 首次运行
	}
	trimmed := strings.TrimSpace(string(payload))
	if trimmed == "" {
		return nil, nil
	}

	plaintext, err := crypto.DecryptAES256GCM(trimmed, s.keyB64)
	if err != nil {
		s.quarantine(fmt.Sprintf("加载失败: 解密失败 (密钥错误或数据被篡改): %v", err))
		return nil, nil
	}
	var doc taskStoreDoc
	if err := json.Unmarshal([]byte(plaintext), &doc); err != nil {
		s.quarantine(fmt.Sprintf("加载失败: JSON 解析失败: %v", err))
		return nil, nil
	}
	if doc.Magic != taskStoreMagic {
		s.quarantine("加载失败: magic 不匹配")
		return nil, nil
	}
	if doc.Version > taskStoreVersion {
		// 高版本数据: 保留原文件并锁定写, 防止旧版本 agent 覆盖
		s.locked = true
		logger.Errorf("[TaskStore] ❌ 存储版本 %d 高于支持版本 %d, 保留原文件不覆盖, 本次以空任务启动且持久化只读", doc.Version, taskStoreVersion)
		return nil, nil
	}
	if doc.Version != taskStoreVersion {
		s.quarantine(fmt.Sprintf("加载失败: 不支持的版本 %d", doc.Version))
		return nil, nil
	}

	s.lastSavedAt = doc.SavedAt
	logger.Infof("[TaskStore] 💾 已恢复持久化任务: onetime=%d, cron=%d", len(doc.Data.Onetasks), len(doc.Data.Crontasks))
	return doc.Data.Onetasks, doc.Data.Crontasks
}

// quarantine 损坏文件隔离改名避免反复加载失败 (调用方需持有 s.mu); 失败也不抛出
func (s *taskStore) quarantine(reason string) {
	if s.path != "" {
		if _, err := os.Stat(s.path); err == nil {
			bad := fmt.Sprintf("%s.bad-%d", s.path, time.Now().UnixNano())
			if err := os.Rename(s.path, bad); err == nil {
				logger.Errorf("[TaskStore] ❌ %s, 原文件已隔离: %s", reason, bad)
				return
			}
		}
	}
	logger.Errorf("[TaskStore] ❌ %s", reason)
}

// save 原子落盘; 返回是否成功 (未启用/只读/失败均返回 false, 不抛出)
func (s *taskStore) save(onetasks []string, crontasks map[string]string) bool {
	if !s.enabled || s.locked {
		return false
	}
	s.mu.Lock()
	defer s.mu.Unlock()

	doc := taskStoreDoc{
		Magic:   taskStoreMagic,
		Version: taskStoreVersion,
		SavedAt: time.Now().UTC().Format(time.RFC3339),
		Data: taskStoreData{
			Onetasks:  onetasks,
			Crontasks: crontasks,
		},
	}
	if doc.Data.Onetasks == nil {
		doc.Data.Onetasks = []string{}
	}
	if doc.Data.Crontasks == nil {
		doc.Data.Crontasks = map[string]string{}
	}

	plaintext, err := json.Marshal(doc)
	if err == nil {
		var payload string
		payload, err = crypto.EncryptAES256GCM(string(plaintext), s.keyB64)
		if err == nil {
			if err = os.MkdirAll(filepath.Dir(s.path), 0o700); err == nil {
				tmp := fmt.Sprintf("%s.tmp-%d", s.path, os.Getpid())
				if err = writeFileSync(tmp, []byte(payload)); err == nil {
					if err = os.Rename(tmp, s.path); err == nil {
						s.lastSavedAt = doc.SavedAt
						return true
					}
				}
				_ = os.Remove(tmp)
			}
		}
	}
	logger.Errorf("[TaskStore] ❌ 保存失败 (内存任务不受影响): %v", err)
	return false
}

// writeFileSync 写入并 fsync, 保证 rename 前数据落盘
func writeFileSync(path string, data []byte) error {
	f, err := os.OpenFile(path, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0o600)
	if err != nil {
		return err
	}
	if _, err = f.Write(data); err == nil {
		err = f.Sync()
	}
	if closeErr := f.Close(); err == nil {
		err = closeErr
	}
	return err
}

// statusSnapshot 供 /api/task/status 读取持久化状态 (避免与 save 并发数据竞争)
func (s *taskStore) statusSnapshot() (enabled bool, path string, lastSavedAt string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	return s.enabled, s.path, s.lastSavedAt
}
