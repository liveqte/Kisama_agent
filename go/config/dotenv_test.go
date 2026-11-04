package config

import (
	"os"
	"path/filepath"
	"testing"
)

// parseDotEnv 与 py _load_dotenv / java loadDotEnv 行级语义逐条对齐的回归基线
func TestParseDotEnv(t *testing.T) {
	cases := []struct {
		name string
		in   string
		want [][2]string
	}{
		{"普通键值", "A=1\n", [][2]string{{"A", "1"}}},
		{"多行", "A=1\nB=2\n", [][2]string{{"A", "1"}, {"B", "2"}}},
		{"空行与注释", "\n# 注释行\nB=2\n   # 带缩进注释\n", [][2]string{{"B", "2"}}},
		{"export 前缀", "export C=3\nexport  D=4\n", [][2]string{{"C", "3"}, {"D", "4"}}},
		{"成对双引号剥离", "E=\"hello world\"\n", [][2]string{{"E", "hello world"}}},
		{"成对单引号剥离保护井号", "F='v#x'\n", [][2]string{{"F", "v#x"}}},
		{"不成对引号不剥离", "G=\"abc\n", [][2]string{{"G", "\"abc"}}},
		{"首个等号切分", "H=a=b=c\n", [][2]string{{"H", "a=b=c"}}},
		{"键值两侧 trim", "  I  =  5  \n", [][2]string{{"I", "5"}}},
		{"无等号跳过", "JUSTKEY\n=leading\n", nil},
		{"空值保留为存在键", "J=\n", [][2]string{{"J", ""}}},
		{"CRLF 行尾", "K=1\r\nL=2\r\n", [][2]string{{"K", "1"}, {"L", "2"}}},
		{"行内井号不截断", "M=v#hash\n", [][2]string{{"M", "v#hash"}}},
		{"全部无效", "\n#c\nnoeq\n=x\nexport\n", nil},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			got := parseDotEnv(tc.in)
			if len(got) != len(tc.want) {
				t.Fatalf("parseDotEnv(%q) = %v, 期望 %d 对, 实得 %d 对", tc.in, got, len(tc.want), len(got))
			}
			for i := range got {
				if got[i] != tc.want[i] {
					t.Fatalf("parseDotEnv(%q) 第 %d 对 = %v, 期望 %v", tc.in, i, got[i], tc.want[i])
				}
			}
		})
	}
}

// 真实环境变量优先: 已存在的键不覆盖, 缺失的键由 .env 填补
func TestMergeDotEnvEnvWins(t *testing.T) {
	env := map[string]string{"A": "from-env"}
	var setOrder []string
	mergeDotEnv([][2]string{{"A", "from-dotenv"}, {"B", "from-dotenv"}, {"A", "again"}},
		func(k string) bool { _, ok := env[k]; return ok },
		func(k, v string) { env[k] = v; setOrder = append(setOrder, k) })
	if env["A"] != "from-env" {
		t.Fatalf("已有键被覆盖: A=%q", env["A"])
	}
	if env["B"] != "from-dotenv" {
		t.Fatalf("缺失键未填补: B=%q", env["B"])
	}
	if len(setOrder) != 1 || setOrder[0] != "B" {
		t.Fatalf("set 调用序列异常: %v", setOrder)
	}
}

// 文件装配全链路: 真 .env 文件 + 真进程环境 (测试键统一 KISAMA_DOTENV_T_ 前缀, 收尾清理)
func TestLoadDotEnvFromRealEnv(t *testing.T) {
	dir := t.TempDir()
	path := filepath.Join(dir, ".env")
	content := "KISAMA_DOTENV_T_SET=from-dotenv\nKISAMA_DOTENV_T_ONLY=from-dotenv\nexport KISAMA_DOTENV_T_EXPORT=from-dotenv\n"
	if err := os.WriteFile(path, []byte(content), 0o600); err != nil {
		t.Fatal(err)
	}
	t.Setenv("KISAMA_DOTENV_T_SET", "from-env")
	t.Cleanup(func() {
		os.Unsetenv("KISAMA_DOTENV_T_ONLY")
		os.Unsetenv("KISAMA_DOTENV_T_EXPORT")
	})

	loadDotEnvFrom(path)

	if got := os.Getenv("KISAMA_DOTENV_T_SET"); got != "from-env" {
		t.Fatalf("真实环境变量应优先: KISAMA_DOTENV_T_SET=%q", got)
	}
	if got := os.Getenv("KISAMA_DOTENV_T_ONLY"); got != "from-dotenv" {
		t.Fatalf("缺失键应从 .env 填补: KISAMA_DOTENV_T_ONLY=%q", got)
	}
	if got := os.Getenv("KISAMA_DOTENV_T_EXPORT"); got != "from-dotenv" {
		t.Fatalf("export 前缀行应生效: KISAMA_DOTENV_T_EXPORT=%q", got)
	}
}

// 文件不存在 → 静默跳过, 不报错不改动环境
func TestLoadDotEnvFromMissingFile(t *testing.T) {
	loadDotEnvFrom(filepath.Join(t.TempDir(), "no-such.env"))
}
