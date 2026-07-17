package handlers

import (
	"bytes"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"sync"
	"syscall"
	"time"

	"github.com/creack/pty"
	"github.com/flynn/noise"
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/logger"
	"golang.org/x/crypto/curve25519"
)

const (
	terminalIdleTimeout      = 30 * time.Minute
	terminalWriteTimeout     = 10 * time.Second
	terminalMaxMessageSize   = 1 << 20
	terminalMessageQueueSize = 200
	terminalProcessStopGrace = 2 * time.Second
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// WSIncomingMessage 对应 Node.js 前端发送的各种消息结构
type WSIncomingMessage struct {
	Type      string `json:"type"`
	RequestID string `json:"request_id,omitempty"`
	Data      string `json:"data,omitempty"`
	Encoding  string `json:"encoding,omitempty"` // "base64" 或空
	Rows      uint16 `json:"rows,omitempty"`
	Cols      uint16 `json:"cols,omitempty"`
}

// ----------------------------------------------------------------------
// NoiseSessionWrapper 100% 对齐 Node.js 实现
// ----------------------------------------------------------------------
type NoiseSessionWrapper struct {
	handshakeFinished bool
	hsState           *noise.HandshakeState
	sendCipher        *noise.CipherState
	recvCipher        *noise.CipherState
	action            string // 模拟 GetAction(): "READ", "WRITE", "SPLIT"
	expectedRemotePub []byte
}

func NewNoiseSessionWrapper(isInitiator bool, privateKeyB64, publicKeyB64 string) (*NoiseSessionWrapper, error) {
	// 1. 解码 Base64 密钥
	privKey, err := base64.StdEncoding.DecodeString(privateKeyB64)
	if err != nil {
		return nil, fmt.Errorf("decode agent private key failed: %w", err)
	}
	if len(privKey) != 32 {
		return nil, fmt.Errorf("invalid agent private key length: expected 32, got %d", len(privKey))
	}

	var expectedRemotePub []byte
	if publicKeyB64 != "" {
		expectedRemotePub, err = base64.StdEncoding.DecodeString(publicKeyB64)
		if err != nil {
			return nil, fmt.Errorf("decode control public key failed: %w", err)
		}
	}

	// 2. 根据私钥推导本地 X25519 公钥
	pubKey := make([]byte, 32)
	curve25519.ScalarBaseMult((*[32]byte)(pubKey), (*[32]byte)(privKey))

	// 3. 配置协议：Noise_XX_25519_ChaChaPoly_BLAKE2s
	cipherSuite := noise.NewCipherSuite(noise.DH25519, noise.CipherChaChaPoly, noise.HashBLAKE2s)

	config := noise.Config{
		CipherSuite:   cipherSuite,
		Random:        rand.Reader,
		Pattern:       noise.HandshakeXX,
		Initiator:     isInitiator, // false
		Prologue:      []byte("kisama_terminal_v1"),
		StaticKeypair: noise.DHKey{Private: privKey, Public: pubKey},
	}

	hs, err := noise.NewHandshakeState(config)
	if err != nil {
		return nil, fmt.Errorf("failed to create handshake state: %w", err)
	}

	initialAction := "READ"
	if isInitiator {
		initialAction = "WRITE"
	}

	return &NoiseSessionWrapper{
		handshakeFinished: false,
		hsState:           hs,
		action:            initialAction,
		expectedRemotePub: expectedRemotePub,
	}, nil
}

func (n *NoiseSessionWrapper) Init() error { return nil }

func (n *NoiseSessionWrapper) ProcessHandshake(payload []byte) ([]byte, error) {
	if n.handshakeFinished {
		return []byte{}, nil
	}

	if len(payload) > 0 && n.action == "READ" {
		_, cs0, cs1, err := n.hsState.ReadMessage(nil, payload)
		if err != nil {
			return nil, err
		}
		if cs0 != nil && cs1 != nil {
			n.action = "SPLIT"
			n.splitAndFinish(cs0, cs1)
			return []byte{}, nil
		} else {
			n.action = "WRITE"
		}
	}

	if n.action == "SPLIT" {
		return []byte{}, nil
	}

	if n.action == "WRITE" {
		outMsg, cs0, cs1, err := n.hsState.WriteMessage(nil, []byte{})
		if err != nil {
			return nil, err
		}
		if cs0 != nil && cs1 != nil {
			n.action = "SPLIT"
			n.splitAndFinish(cs0, cs1)
		} else {
			n.action = "READ"
		}
		return outMsg, nil
	}

	return []byte{}, nil
}

func (n *NoiseSessionWrapper) splitAndFinish(cs0, cs1 *noise.CipherState) {
	// [0] 永远是本地发信器, [1] 永远是本地收信器
	n.sendCipher = cs1
	n.recvCipher = cs0

	if len(n.expectedRemotePub) > 0 {
		if !bytes.Equal(n.hsState.PeerStatic(), n.expectedRemotePub) {
			logger.Errorf("Noise 握手校验失败: 远端公钥不匹配")
			return
		}
	}

	n.handshakeFinished = true
	n.hsState = nil
}

func (n *NoiseSessionWrapper) Encrypt(plaintext []byte) []byte {
	if !n.handshakeFinished || n.sendCipher == nil {
		return plaintext
	}
	out, _ := n.sendCipher.Encrypt(nil, nil, plaintext)
	return out
}

func (n *NoiseSessionWrapper) Decrypt(ciphertext []byte) ([]byte, error) {
	if !n.handshakeFinished || n.recvCipher == nil {
		return nil, errors.New("握手未完成，无法解密数据")
	}
	return n.recvCipher.Decrypt(nil, nil, ciphertext)
}

func (n *NoiseSessionWrapper) HandshakeFinished() bool { return n.handshakeFinished }
func (n *NoiseSessionWrapper) Free() {
	n.sendCipher = nil
	n.recvCipher = nil
	n.hsState = nil
}

// ----------------------------------------------------------------------
// TerminalSessionHandler 终端会话核心类
// ----------------------------------------------------------------------
type TerminalSessionHandler struct {
	ws         *websocket.Conn
	ptyProcess *os.File
	requestID  string
	useNoise   bool
	cipher     *NoiseSessionWrapper

	msgChan     chan []byte
	closeOnce   sync.Once
	cmd         *exec.Cmd
	processDone chan struct{}
	done        chan struct{}
	writeMu     sync.Mutex
	cipherMu    sync.Mutex
}

func NewTerminalSessionHandler(agentPrivKey, controlPubKey string) (*TerminalSessionHandler, error) {
	cipher, err := NewNoiseSessionWrapper(false, agentPrivKey, controlPubKey)
	if err != nil {
		return nil, err
	}

	return &TerminalSessionHandler{
		cipher:      cipher,
		msgChan:     make(chan []byte, terminalMessageQueueSize),
		done:        make(chan struct{}),
		processDone: make(chan struct{}),
	}, nil
}

// WebSocketHandler 路由入口
func WebSocketHandler(c *gin.Context) {
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		logger.Errorf("Failed to upgrade connection: %v", err)
		return
	}

	requestID := c.Query("request_id")
	token := c.Query("token")

	logger.Debugf("WebSocket connection attempt with request_id: %s", requestID)

	if requestID == "" {
		logger.Debug("Closing connection due to missing request_id")
		_ = conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(1008, "Missing request_id"))
		_ = conn.Close()
		return
	}

	// 🚀 核心同步：直接从已生成的全局 Config 实例中抓取所需的 Noise 密钥流
	cfg := config.Get()
	agentPrivateKey := cfg.NoiseKeys.Agent.PrivateB64
	controlPublicKey := cfg.NoiseKeys.Control.PublicB64

	handler, err := NewTerminalSessionHandler(agentPrivateKey, controlPublicKey)
	if err != nil {
		logger.Errorf("[终端会话 %s] 初始化 Noise 状态机错误: %v", requestID, err)
		_ = conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(1011, "Internal configuration error"))
		_ = conn.Close()
		return
	}

	handler.StartSession(conn, requestID, token)
}

func (h *TerminalSessionHandler) StartSession(ws *websocket.Conn, requestID string, token string) {
	h.ws = ws
	h.requestID = requestID
	h.useNoise = (token == "")
	h.ws.SetReadLimit(terminalMaxMessageSize)
	_ = h.ws.SetReadDeadline(time.Now().Add(terminalIdleTimeout))
	h.ws.SetPongHandler(func(string) error {
		return h.ws.SetReadDeadline(time.Now().Add(terminalIdleTimeout))
	})

	if h.useNoise {
		logger.Infof("[终端会话 %s] 检测到 WS 连接，启用 Noise 加密", requestID)
	} else {
		logger.Infof("[终端会话 %s] 检测到 Token，视为 WSS 链路，跳过 Noise", requestID)
	}

	go h.readPump()

	defer h.Cleanup()

	if h.useNoise {
		if err := h.doNoiseHandshake(); err != nil {
			logger.Errorf("[终端会话 %s] ❌ 加密握手失败: %v", requestID, err)
			return
		}
	}

	if h.isClosed() {
		return
	}

	if err := h.runTerminal(); err != nil {
		logger.Errorf("[终端会话 %s] ❌ 终端会话异常: %v", requestID, err)
		return
	}
}

func (h *TerminalSessionHandler) readPump() {
	defer close(h.msgChan)
	for {
		_, message, err := h.ws.ReadMessage()
		if err != nil {
			return
		}
		if err := h.ws.SetReadDeadline(time.Now().Add(terminalIdleTimeout)); err != nil {
			return
		}
		select {
		case h.msgChan <- message:
		case <-h.done:
			return
		default:
			logger.Warnf("[终端会话 %s] 消息队列已满，关闭会话", h.requestID)
			h.Cleanup()
			return
		}
	}
}

func (h *TerminalSessionHandler) doNoiseHandshake() error {
	logger.Infof("[终端会话 %s] 🤝 开始 Noise 加密握手...", h.requestID)
	if err := h.cipher.Init(); err != nil {
		return err
	}

	// Step 1: Read 客户端发的 msg1 -> 内部推进状态机
	msg1, ok := <-h.msgChan
	if !ok {
		return errors.New("connection closed during handshake step 1")
	}
	msg2, err := h.cipher.ProcessHandshake(msg1)
	if err != nil {
		return fmt.Errorf("handshake step 1 process failed: %w", err)
	}

	// Step 2: 发送响应包 msg2
	if len(msg2) > 0 {
		if err := h.writeMessage(websocket.BinaryMessage, msg2); err != nil {
			return err
		}
	}

	// Step 3: Read 客户端的确认包 msg3
	msg3, ok := <-h.msgChan
	if !ok {
		return errors.New("connection closed during handshake step 3")
	}
	_, err = h.cipher.ProcessHandshake(msg3)
	if err != nil {
		return fmt.Errorf("handshake step 3 process failed: %w", err)
	}

	if !h.handshakeFinished() {
		return errors.New("三次握手交互后仍未进入 Established 状态")
	}

	logger.Infof("[终端会话 %s] ✅ Noise 握手完成，端到端加密通道已建立！", h.requestID)
	return nil
}

func (h *TerminalSessionHandler) runTerminal() error {
	shell := h.getAvailableShell()
	logger.Infof("[终端会话 %s] 🐚 使用 Shell 路径: %s", h.requestID, shell)

	cmd := exec.Command(shell)
	cmd.Env = os.Environ()
	filteredEnv := []string{"TERM=xterm-256color", "LANG=C.UTF-8"}
	for _, env := range cmd.Env {
		if !strings.HasPrefix(env, "PROMPT_COMMAND=") && !strings.HasPrefix(env, "TERM=") && !strings.HasPrefix(env, "LANG=") {
			filteredEnv = append(filteredEnv, env)
		}
	}
	cmd.Env = filteredEnv
	cmd.Dir = os.Getenv("HOME")
	if cmd.Dir == "" {
		cmd.Dir = "."
	}

	ptyPtr, err := pty.StartWithSize(cmd, &pty.Winsize{Rows: 24, Cols: 80})
	if err != nil {
		return fmt.Errorf("💥 启动终端失败: %w", err)
	}
	if h.isClosed() {
		_ = ptyPtr.Close()
		_ = syscall.Kill(-cmd.Process.Pid, syscall.SIGKILL)
		_ = cmd.Process.Kill()
		_ = cmd.Wait()
		return errors.New("session closed before terminal startup")
	}
	h.cmd = cmd
	h.ptyProcess = ptyPtr
	go func() {
		_ = cmd.Wait()
		close(h.processDone)
	}()

	// PTY -> WS
	go func() {
		defer h.Cleanup()
		buf := make([]byte, 2048)
		for {
			n, err := h.ptyProcess.Read(buf)
			if err != nil {
				logger.Infof("[终端会话 %s] 🔌 终端进程退出", h.requestID)
				return
			}

			sendData := buf[:n]
			if h.useNoise && h.handshakeFinished() {
				sendData = h.encrypt(sendData)
			}

			err = h.writeMessage(websocket.BinaryMessage, sendData)
			if err != nil {
				return
			}
		}
	}()

	// WS 通道积压流 -> PTY
	for rawMsg := range h.msgChan {
		h.processTerminalMessage(rawMsg)
	}

	return nil
}

func (h *TerminalSessionHandler) processTerminalMessage(message []byte) {
	if h.ptyProcess == nil {
		return
	}

	var decrypted []byte
	var err error

	if h.useNoise {
		decrypted, err = h.decrypt(message)
		if err != nil {
			logger.Errorf("[终端会话 %s] ⚠️ 解密失败: %v", h.requestID, err)
			if h.useNoise {
				h.Cleanup()
			}
			return
		}
	} else {
		decrypted = message
	}

	textMsg := strings.TrimSpace(string(decrypted))
	isJSON := false

	if strings.HasPrefix(textMsg, "{") {
		var msg WSIncomingMessage
		if err := json.Unmarshal(decrypted, &msg); err == nil {
			isJSON = true
			switch msg.Type {
			case "heartbeat":
				reply, _ := json.Marshal(map[string]string{"type": "heartbeat"})
				if h.useNoise {
					reply = h.encrypt(reply)
				}
				_ = h.writeMessage(websocket.BinaryMessage, reply)

			case "resize":
				_ = pty.Setsize(h.ptyProcess, &pty.Winsize{Rows: msg.Rows, Cols: msg.Cols})

			case "input":
				var inputBytes []byte
				if msg.Encoding == "base64" {
					inputBytes, _ = base64.StdEncoding.DecodeString(msg.Data)
				} else {
					inputBytes = []byte(msg.Data)
				}
				_, _ = h.ptyProcess.Write(inputBytes)
			}
		}
	}

	if !isJSON {
		_, _ = h.ptyProcess.Write(decrypted)
	}
}

func (h *TerminalSessionHandler) getAvailableShell() string {
	// 🚀 1. 核心修复：优先寻找体验更佳的高级富文本 Shell
	advancedShells := []string{"/bin/bash", "/bin/zsh", "/bin/ash"}
	for _, sh := range advancedShells {
		if _, err := os.Stat(sh); err == nil {
			return sh // 只要有更高级的，直接采用
		}
	}

	// 2. 如果没有高级 Shell，再退一步听从环境变量的安排
	envShell := os.Getenv("SHELL")
	if envShell != "" {
		if _, err := os.Stat(envShell); err == nil {
			return envShell
		}
	}

	// 3. 最后的兜底
	return "/bin/sh"
}

func (h *TerminalSessionHandler) writeMessage(messageType int, data []byte) error {
	h.writeMu.Lock()
	defer h.writeMu.Unlock()
	if h.ws == nil {
		return errors.New("websocket is nil")
	}
	if err := h.ws.SetWriteDeadline(time.Now().Add(terminalWriteTimeout)); err != nil {
		return err
	}
	return h.ws.WriteMessage(messageType, data)
}

func (h *TerminalSessionHandler) encrypt(data []byte) []byte {
	h.cipherMu.Lock()
	defer h.cipherMu.Unlock()
	if h.cipher == nil {
		return data
	}
	return h.cipher.Encrypt(data)
}

func (h *TerminalSessionHandler) decrypt(data []byte) ([]byte, error) {
	h.cipherMu.Lock()
	defer h.cipherMu.Unlock()
	if h.cipher == nil {
		return nil, errors.New("cipher is nil")
	}
	return h.cipher.Decrypt(data)
}

func (h *TerminalSessionHandler) handshakeFinished() bool {
	h.cipherMu.Lock()
	defer h.cipherMu.Unlock()
	return h.cipher != nil && h.cipher.HandshakeFinished()
}

func (h *TerminalSessionHandler) isClosed() bool {
	select {
	case <-h.done:
		return true
	default:
		return false
	}
}

func (h *TerminalSessionHandler) Cleanup() {
	h.closeOnce.Do(func() {
		close(h.done)
		if h.ws != nil {
			_ = h.writeMessage(websocket.CloseMessage, websocket.FormatCloseMessage(1000, "Cleanly closed"))
			_ = h.ws.Close()
		}
		if h.ptyProcess != nil {
			_ = h.ptyProcess.Close()
		}
		if h.cmd != nil && h.cmd.Process != nil {
			pid := h.cmd.Process.Pid
			_ = syscall.Kill(-pid, syscall.SIGKILL)
			_ = h.cmd.Process.Kill()
			select {
			case <-h.processDone:
			case <-time.After(terminalProcessStopGrace):
				_ = syscall.Kill(-pid, syscall.SIGKILL)
				_ = h.cmd.Process.Kill()
				<-h.processDone
			}
		}
		h.cipherMu.Lock()
		if h.cipher != nil {
			h.cipher.Free()
		}
		h.cipherMu.Unlock()
	})
}
