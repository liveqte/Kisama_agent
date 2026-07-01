# 使用轻量级的 Alpine 作为基础镜像
FROM alpine:3.19

# 启用 BuildKit 的架构参数
ARG TARGETARCH

# 定义 s6-overlay 版本
ARG S6_OVERLAY_VERSION=3.1.6.2 

# 1. 安装必要的下载和解压工具 (不再需要 tini)
RUN apk add --no-cache curl xz

# 2. 下载并安装 s6-overlay (根据构建架构自动选择 x86_64 或 aarch64)
RUN S6_ARCH=$(if [ "$TARGETARCH" = "amd64" ]; then echo "x86_64"; \
               elif [ "$TARGETARCH" = "arm64" ]; then echo "aarch64"; \
               else echo "$TARGETARCH"; fi) && \
    curl -fsSL https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-noarch.tar.xz -o /tmp/s6-noarch.tar.xz && \
    curl -fsSL https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-${S6_ARCH}.tar.xz -o /tmp/s6-arch.tar.xz && \
    tar -C / -Jxpf /tmp/s6-noarch.tar.xz && \
    tar -C / -Jxpf /tmp/s6-arch.tar.xz && \
    rm -f /tmp/s6-*.tar.xz && \
    apk del curl xz

# 3. 复制 agent 二进制文件并根据架构重命名
WORKDIR /app
COPY agent agent-linux-arm64 /tmp/

RUN if [ "$TARGETARCH" = "amd64" ]; then \
        mv /tmp/agent /app/agent; \
    elif [ "$TARGETARCH" = "arm64" ]; then \
        mv /tmp/agent-linux-arm64 /app/agent; \
    else \
        echo "Unsupported architecture: $TARGETARCH" && exit 1; \
    fi && \
    chmod +x /app/agent && \
    rm -f /tmp/agent /tmp/agent-linux-arm64

# 4. 配置 s6-rc 服务基础目录和类型
RUN mkdir -p /etc/s6-overlay/s6-rc.d/myagent && \
    printf 'longrun\n' > /etc/s6-overlay/s6-rc.d/myagent/type

# 5. 使用 heredoc 编写 run 脚本 (独立 RUN 指令，避免续行符冲突)
# 注意：EOF 必须顶格写，不能有空格
RUN cat << 'EOF' > /etc/s6-overlay/s6-rc.d/myagent/run
#!/bin/sh

# 【核心修复】：加载 Docker 注入的环境变量
if [ -d /run/s6/container_environment ]; then
    for envfile in /run/s6/container_environment/*; do
        [ -f "$envfile" ] || continue
        export "$(basename "$envfile")=$(cat "$envfile")"
    done
fi

# 启动 agent 并将 stderr 重定向到 stdout
exec /app/agent 2>&1
EOF

# 6. 设置脚本权限并注册到 s6 的 user bundle
RUN chmod 755 /etc/s6-overlay/s6-rc.d/myagent/run && \
    mkdir -p /etc/s6-overlay/s6-rc.d/user/contents.d && \
    touch /etc/s6-overlay/s6-rc.d/user/contents.d/myagent

ENTRYPOINT ["/init"]