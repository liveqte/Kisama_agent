package config

// 💾 .env 自举 (py agent.py _load_dotenv / js agent.js / java/java11 loadDotEnv 同款行为, Go 本批补齐:
// docs/API.MD 第九节"守护行为环境变量(支持同目录 .env)"与第十三节"KSTORE 可经 .env 注入"此前对 Go
// 是文档承诺而非实现):
// - 只查可执行文件同目录的 .env (py/js 为脚本同目录, java/java11 为 jar/class 同目录, 与 keys/ 同路径约定);
// - 真实环境变量优先, .env 只填补空缺 (setdefault 语义, 对齐 java putIfAbsent / py setdefault / js in 判断);
// - 不处理行内注释 (保护含 # 的值, 如域名 x-target-host 反代语法);
// - 文件不存在或解析异常静默跳过, 绝不影响启动;
// - 挂 config 包 init: 早于 main 与 cgo (.so exports_cgo.go) 的任何环境变量求值; cgo 宿主经 setEnv
//   显式注入的参数在其后执行、覆盖 .env 值, 时序正确。

import (
	"os"
	"path/filepath"
	"strings"
)

func init() {
	LoadDotEnv()
}

// LoadDotEnv 把可执行文件同目录 .env 中尚未设置的环境变量并入进程环境。
func LoadDotEnv() {
	exe, err := os.Executable()
	if err != nil {
		return
	}
	loadDotEnvFrom(filepath.Join(filepath.Dir(exe), ".env"))
}

func loadDotEnvFrom(path string) {
	data, err := os.ReadFile(path)
	if err != nil {
		return
	}
	mergeDotEnv(parseDotEnv(string(data)),
		func(key string) bool { _, ok := os.LookupEnv(key); return ok },
		func(key, value string) { _ = os.Setenv(key, value) })
}

// parseDotEnv 按行解析: 跳过空行与 # 开头行, 支持 export 前缀; 按首个 = 切分, 键值两侧 trim;
// 成对单/双引号剥离; 键为空的行丢弃。返回有序键值对 (语义与 py/java 逐条对齐, 含空值行)。
func parseDotEnv(data string) [][2]string {
	var pairs [][2]string
	for _, raw := range strings.Split(data, "\n") {
		line := strings.TrimSpace(raw)
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		if strings.HasPrefix(line, "export ") {
			line = strings.TrimSpace(strings.TrimPrefix(line, "export "))
		}
		eq := strings.Index(line, "=")
		if eq <= 0 {
			continue
		}
		key := strings.TrimSpace(line[:eq])
		value := strings.TrimSpace(line[eq+1:])
		if len(value) >= 2 && (value[0] == '"' || value[0] == '\'') && value[len(value)-1] == value[0] {
			value = value[1 : len(value)-1]
		}
		if key == "" {
			continue
		}
		pairs = append(pairs, [2]string{key, value})
	}
	return pairs
}

// mergeDotEnv 真实环境变量优先: 已存在的键不覆盖, .env 只填补空缺。
func mergeDotEnv(pairs [][2]string, exists func(string) bool, set func(string, string)) {
	for _, kv := range pairs {
		if !exists(kv[0]) {
			set(kv[0], kv[1])
		}
	}
}
