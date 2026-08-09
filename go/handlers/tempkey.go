package handlers

import (
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/liveqte/kisama_agent/go/config"
	"github.com/liveqte/kisama_agent/go/tempkey"
)

// tempKeyECDSA 临时 ECDSA 密钥响应结构
type tempKeyECDSA struct {
	PrivateKey string `json:"private_key"`
	PublicKey  string `json:"public_key"`
}

// tempKeyECIES 临时 ECIES 密钥响应结构
type tempKeyECIES struct {
	PrivateKey string `json:"private_key"`
	PublicKey  string `json:"public_key"`
}

// tempKeyPayload /api/tempkey 响应 (与 Python/JS/Java 版结构一致)
type tempKeyPayload struct {
	Status     string       `json:"status"`
	KeyID      string       `json:"key_id"`
	TTLSeconds int64        `json:"ttl_seconds"`
	CreatedAt  string       `json:"created_at"`
	ExpiresAt  string       `json:"expires_at"`
	ECDSA      tempKeyECDSA `json:"ecdsa"`
	ECIES      tempKeyECIES `json:"ecies"`
}

// GetTempKey GET /api/tempkey?ttl=<小时> (1~168, 默认24, 超范围422)
// - 有效期内重复请求返回同一密钥对 (幂等, 不重复生成)
// - 过期后自动生成新的密钥对, 旧密钥立即作废
// - 响应按验签来源加密: 静态密钥->控制端静态公钥, 临时密钥->当前临时 ECIES 公钥
func GetTempKey(tk *tempkey.Manager, cfg *config.Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		ttl := cfg.TempKeyDefaultTTL
		if q := c.Query("ttl"); q != "" {
			n, err := strconv.Atoi(q)
			if err != nil || n < 1 || n > cfg.TempKeyMaxTTL {
				c.JSON(422, gin.H{"error": fmt.Sprintf("ttl must be an integer between 1 and %d", cfg.TempKeyMaxTTL)})
				return
			}
			ttl = n
		}

		entry, err := tk.GetOrCreate(ttl)
		if err != nil {
			c.JSON(500, gin.H{"error": "TempKey generation failed: " + err.Error()})
			return
		}

		c.JSON(200, tempKeyPayload{
			Status:     "ok",
			KeyID:      entry.KeyID,
			TTLSeconds: entry.TTLSeconds,
			CreatedAt:  time.Unix(entry.CreatedAt, 0).UTC().Format("2006-01-02T15:04:05Z"),
			ExpiresAt:  time.Unix(entry.ExpiresAt, 0).UTC().Format("2006-01-02T15:04:05Z"),
			ECDSA: tempKeyECDSA{
				PrivateKey: strings.TrimSpace(entry.EcdsaPrivatePEM),
				PublicKey:  strings.TrimSpace(entry.EcdsaPublicPEM),
			},
			ECIES: tempKeyECIES{
				PrivateKey: entry.EciesPrivateHex,
				PublicKey:  entry.EciesPublicHex,
			},
		})
	}
}
