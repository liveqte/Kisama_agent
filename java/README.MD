# Kisama Java Agent

## 快速上手

```bash
curl -L https://raw.githubusercontent.com/liveqte/Kisama_agent/refs/heads/main/java/target/kisama-agent-java-0.1.0-obfuscated.jar -o kisama.jar
export KPORT=8003
export ECDSA_PUBKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ECIES_PUBKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
java -jar kisama.jar.jar
```

## 自行构建

### 构建:
```bash
./build.sh
```
### 运行:

```bash
export KPORT=8003
export ECDSA_PUBKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export ECIES_PUBKEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
java -jar target/kisama-agent-java-0.1.0-jar-with-dependencies.jar
```


