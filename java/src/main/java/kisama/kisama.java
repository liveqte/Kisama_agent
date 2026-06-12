package kisama;

import static spark.Spark.*;
import spark.Route;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import javax.crypto.Cipher;
import javax.crypto.Mac;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.*;
import java.lang.management.ManagementFactory;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.PosixFilePermissions;
import java.security.*;
import java.security.spec.X509EncodedKeySpec;
import java.util.*;
import java.util.concurrent.*;
import org.bouncycastle.jce.ECNamedCurveTable;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.jce.spec.ECNamedCurveParameterSpec;
import org.bouncycastle.jce.spec.ECPublicKeySpec;
import org.bouncycastle.math.ec.ECPoint;
//超级终端引入
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;
import java.nio.ByteBuffer;
import com.pty4j.PtyProcess;
import com.pty4j.PtyProcessBuilder;

public class kisama {

    // ==================== 实例配置与状态 (原 static 变量改造) ====================
    private final Gson gson = new Gson();
    private final boolean DEBUG;
    private final String HOST;
    private final int PORT;
    private final String FILE_ROOT;
    private final String KEYS_DIR;
    private final String ECDSA_PUBLIC_KEY_B64;
    private final String ECIES_PUBLIC_KEY_B64;
    private final boolean LOG;

    private final java.util.concurrent.atomic.AtomicBoolean ONETIME_EXECUTED = new java.util.concurrent.atomic.AtomicBoolean(false);
    private String CTRL_PRIVATE_KEY_B64 = " ";
    private String AGENT_PUBLIC_KEY_B64 = " ";
    private byte[] AGENT_PRIVATE_KEY = new byte[32];
    private byte[] CONTROL_PUBLIC_KEY = new byte[32];

    private PublicKey ECDSA_PUBLIC_KEY = null;
    private byte[] ECIES_PUBLIC_KEY = null;
    private byte[] SESSION_KEY = null;

    private final List<String> onetime = Collections.synchronizedList(new ArrayList<>());
    private final List<Map<String, Object>> onetime_log = Collections.synchronizedList(new ArrayList<>());
    private final Map<String, String> crons = new ConcurrentHashMap<>();
    private final List<Map<String, Object>> cron_log = Collections.synchronizedList(new ArrayList<>());
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(4);

    private volatile boolean isRunning = false;

   // ==================== 构造函数 ====================
    // 1. 无参构造函数：保持原汁原味，完全不改，全部通过原本的逻辑和全局提取初始化
    public kisama() {
        this.DEBUG = Boolean.parseBoolean(System.getenv().getOrDefault("DEBUG", "false"));
        this.HOST = System.getenv().getOrDefault("HOST", "0.0.0.0");
        this.PORT = Integer.parseInt(System.getenv().getOrDefault("KPORT",
                System.getenv().getOrDefault("PORT",
                        System.getenv().getOrDefault("SERVER_PORT", "8000"))));
        this.FILE_ROOT = System.getenv().getOrDefault("FILE_ROOT", System.getProperty("user.dir"));
        this.KEYS_DIR = System.getenv().getOrDefault("KEYS_DIR", "./keys");
        this.ECDSA_PUBLIC_KEY_B64 = getKeyWithFallback("ECDSA_PUBKEY", "agent_ecdsa_pub.pem", "YOUR_HARDCODED_ECDSA_PUBLIC_KEY_HERE");
        this.ECIES_PUBLIC_KEY_B64 = getKeyWithFallback("ECIES_PUBKEY", "agent_ecies_pub.b64", "YOUR_HARDCODED_ECIES_PUBLIC_KEY_HERE");
        this.LOG = Boolean.parseBoolean(System.getenv().getOrDefault("LOG", "false"));
    }

    // 2. 有参构造函数（重载）：允许外部模块直接覆盖核心 3 要素，其余继续走默认初始化
    public kisama(int port, String ecdsaPublicKeyB64, String eciesPublicKeyB64) {
        // 覆盖你指定的三个必要参数
        this.PORT = port;
        this.ECDSA_PUBLIC_KEY_B64 = ecdsaPublicKeyB64;
        this.ECIES_PUBLIC_KEY_B64 = eciesPublicKeyB64;

        // 其他值继续保持默认配置和环境变量提取
        this.DEBUG = Boolean.parseBoolean(System.getenv().getOrDefault("DEBUG", "false"));
        this.HOST = System.getenv().getOrDefault("HOST", "0.0.0.0");
        this.FILE_ROOT = System.getenv().getOrDefault("FILE_ROOT", System.getProperty("user.dir"));
        this.KEYS_DIR = System.getenv().getOrDefault("KEYS_DIR", "./keys");
        this.LOG = Boolean.parseBoolean(System.getenv().getOrDefault("LOG", "false"));
    }
    // ==================== 生命周期管理 ====================
    public void start() throws Exception {
        if (isRunning) {
            log("[TRACE-INIT] ⚠️ Agent 已经在运行中，忽略重复启动请求。");
            return;
        }

        webSocket("/api/ws/*", new KisamaWebSocketHandler(this));
        port(this.PORT);
        ipAddress(this.HOST);

        log("[TRACE-INIT] ===== 正在初始化 Kisama Java 代理端容器 =====");
        log("[TRACE-INIT] 运行模式 DEBUG=" + this.DEBUG);

        initCrypto();

        log("[TRACE-INIT] ⏰ 正在激活后台 Cron 定时任务流调度引擎...");
        this.scheduler.scheduleAtFixedRate(() -> {
            try {
                if (!this.crons.isEmpty()) {
                    log("[TRACE-CRON] 触发周期性定时任务动态扫描...");
                    for (Map.Entry<String, String> entry : this.crons.entrySet()) {
                        String cronExpression = entry.getKey();
                        String cmd = entry.getValue();
                        Map<String, Object> r = executeCommandSync(cmd, null);

                        Map<String, Object> logEntry = new LinkedHashMap<>();
                        logEntry.put("ts", java.time.Instant.now().toString());
                        logEntry.put("cmd", cmd);
                        logEntry.put("output", r.get("result"));
                        logEntry.put("exitcode", r.get("exitcode"));
                        logEntry.put("type", "cron");
                        logEntry.put("cron", cronExpression);

                        appendLogWithCap(this.cron_log, logEntry);
                    }
                }
            } catch (Exception e) {
                if (this.DEBUG) {
                    log("[TRACE-CRON] ❌ 定时调度运行时发生异常: " + e.getMessage());
                }
            }
        }, 30, 30, TimeUnit.SECONDS);

        if (this.SESSION_KEY == null) {
            byte[] key = new byte[32];
            new SecureRandom().nextBytes(key);
            this.SESSION_KEY = key;
            log("[TRACE-INIT] 自动生成全局动态 Session Key: " + bytesToHex(this.SESSION_KEY));
        }

        before((req, res) -> {
            applyCorsHeaders(res);
        });

        options("/*", (req, res) -> {
            res.status(200);
            res.type("text/plain");
            return " ";
        });

        before((req, res) -> {
            String endpoint = req.pathInfo();
            log("\n[TRACE-ROUTE] >>> 捕获到网络请求路径: [" + req.requestMethod() + "] " + endpoint);
            if (endpoint != null && endpoint.startsWith("/api/ws/")) {
                return;
            }
            if (!this.DEBUG && !"OPTIONS".equalsIgnoreCase(req.requestMethod())) {
                if (!"/api/baseinfo".equals(endpoint)) {
                    String nonce = req.headers("X-Nonce");
                    String timestamp = req.headers("X-Timestamp");
                    String authToken = req.headers("X-Auth-Token");

                    if (nonce == null || timestamp == null || authToken == null) {
                        log("[TRACE-AUTH] ❌ 强认证失败: 核心头部要素缺失");
                        halt(401, this.gson.toJson(Map.of("error", "Missing auth headers")));
                    }
                    try {
                        verifySignature(nonce, timestamp, authToken);
                        log("[TRACE-AUTH] ✅ ECDSA 签名核验完全匹配，予以放行");
                    } catch (Exception e) {
                        log("[TRACE-AUTH] ❌ 强认证失败: 验签爆裂 -> " + e.getMessage());
                        halt(401, this.gson.toJson(Map.of("error", "Signature verification failed: " + e.getMessage())));
                    }
                }
            }

            if ("true".equalsIgnoreCase(req.headers("X-AES-Encrypted"))) {
                log("[TRACE-DECRYPT] 检测到 X-AES-Encrypted=true, 启动反向 AES-GCM 解密流程...");
                try {
                    String body = req.body();
                    String json = decryptAesPayload(body, this.SESSION_KEY);
                    log("[TRACE-DECRYPT] ✅ 逆向解密明文成功: " + json);
                    Object parsed = this.gson.fromJson(json, new TypeToken<Object>() {
                    }.getType());
                    req.attribute("json_body", parsed);
                } catch (Exception e) {
                    log("[TRACE-DECRYPT] ❌ 逆向解密失败: " + e.getMessage());
                    halt(400, this.gson.toJson(Map.of("error", "Invalid encrypted body: " + e.getMessage())));
                }
            } else {
                if (req.body() != null && !req.body().isBlank()) {
                    try {
                        Object parsed = this.gson.fromJson(req.body(), new TypeToken<Object>() {
                        }.getType());
                        req.attribute("json_body", parsed);
                    } catch (Exception ignored) {
                    }
                }
            }
        });

        // ==================== 完整保留所有业务路由 ====================
        get("/api/baseinfo", (req, res) -> {
            res.type("application/json");
            return this.gson.toJson(buildBaseInfo());
        });

        get("/api/status", (req, res) -> {
            Map<String, Object> st = new LinkedHashMap<>();
            st.put("cpu", Map.of("usage", 1.0));
            st.put("ram", Map.of("total", Runtime.getRuntime().totalMemory(), "used", Runtime.getRuntime().freeMemory()));
            st.put("swap", Map.of("total", 0, "used", 0));
            st.put("load", Map.of("load1", 0.1, "load5", 0.05, "load15", 0.01));
            st.put("disk", Map.of("total", Files.getFileStore(Paths.get(this.FILE_ROOT)).getTotalSpace(), "used", Files.getFileStore(Paths.get(this.FILE_ROOT)).getTotalSpace() - Files.getFileStore(Paths.get(this.FILE_ROOT)).getUsableSpace()));
            st.put("network", Map.of("up", 0, "down", 0, "totalUp", 0, "totalDown", 0));
            st.put("connections", Map.of("tcp", 0, "udp", 0));
            st.put("uptime", ManagementFactory.getRuntimeMXBean().getUptime() / 1000);
            st.put("process", 1);
            st.put("message", " ");
            res.type("application/json");
            return this.gson.toJson(st);
        });

        post("/api/exec", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            if (body == null) halt(400, this.gson.toJson(Map.of("error", "missing body")));
            String cmd = Objects.toString(body.getOrDefault("cmd", " "));
            String cwd = Objects.toString(body.getOrDefault("cwd", " "));
            Map<String, Object> out = executeCommandSync(cmd, cwd);
            res.type("application/json");
            return this.gson.toJson(out);
        });

        post("/api/file/list", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            String path = body != null ? Objects.toString(body.getOrDefault("path", ".")) : ".";
            boolean recursive = body != null && Boolean.TRUE.equals(body.get("recursive"));
            List<Map<String, Object>> files = listFiles(path, recursive);
            Map<String, Object> resp = new LinkedHashMap<>();
            resp.put("status", "ok");
            resp.put("count", files.size());
            resp.put("files", files);
            res.type("application/json");
            return this.gson.toJson(resp);
        });

        post("/api/file/authority", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            List<String> paths = (List<String>) (body != null ? body.getOrDefault("paths", new ArrayList<>()) : new ArrayList<>());
            List<Map<String, Object>> results = new ArrayList<>();
            for (String p : paths) {
                try {
                    Path full = Paths.get(this.FILE_ROOT).resolve(p).normalize();
                    if (!full.startsWith(Paths.get(this.FILE_ROOT))) continue;
                    File f = full.toFile();
                    Map<String, Object> info = new LinkedHashMap<>();
                    info.put("path", p);
                    info.put("mode", f.canRead() ? "r " : "-");
                    info.put("mode_octal", "0o " + Integer.toOctalString(f.canExecute() ? 755 : 644));
                    info.put("readable", f.canRead());
                    info.put("writable", f.canWrite());
                    info.put("executable", f.canExecute());
                    results.add(info);
                } catch (Exception ignored) {
                }
            }
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "files", results));
        });

        put("/api/file/authority", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            Map<String, String> perms = (Map<String, String>) (body != null ? body.getOrDefault("permissions", new HashMap<>()) : new HashMap<>());
            List<Map<String, Object>> results = new ArrayList<>();
            for (Map.Entry<String, String> e : perms.entrySet()) {
                Path full = Paths.get(this.FILE_ROOT).resolve(e.getKey()).normalize();
                Map<String, Object> r = new HashMap<>();
                r.put("path", e.getKey());
                try {
                    Files.setPosixFilePermissions(full, PosixFilePermissions.fromString("rwxr-xr-x"));
                    r.put("status", "ok");
                } catch (Exception ex) {
                    r.put("status", "error");
                    r.put("message", ex.getMessage());
                }
                results.add(r);
            }
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "total", results.size(), "success", results.size(), "results", results));
        });

        post("/api/file/cat", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            String p = Objects.toString(body.getOrDefault("path", " "));
            Path full = Paths.get(this.FILE_ROOT).resolve(p).normalize();
            if (!full.startsWith(Paths.get(this.FILE_ROOT)) || !Files.exists(full)) {
                halt(404, this.gson.toJson(Map.of("status", "error", "message", "not found")));
            }
            byte[] data = Files.readAllBytes(full);
            boolean isBinary = isBinary(data);
            Map<String, Object> resp = new LinkedHashMap<>();
            resp.put("status", "ok");
            resp.put("path", p);
            resp.put("content", isBinary ? Base64.getEncoder().encodeToString(data) : new String(data, StandardCharsets.UTF_8));
            resp.put("encoding", isBinary ? "base64 " : "utf-8 ");
            resp.put("is_binary", isBinary);
            resp.put("size", data.length);
            res.type("application/json");
            return this.gson.toJson(resp);
        });

        post("/api/file", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            String path = Objects.toString(body.getOrDefault("path", "."));
            String filename = Objects.toString(body.getOrDefault("filename", "upload.bin"));
            String content = Objects.toString(body.getOrDefault("content", " "));
            byte[] data = Base64.getDecoder().decode(content);
            Path dir = Paths.get(this.FILE_ROOT).resolve(path).normalize();
            if (!dir.startsWith(Paths.get(this.FILE_ROOT))) halt(403);
            Files.createDirectories(dir);
            Path target = dir.resolve(filename);
            Files.write(target, data);
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "path", Paths.get(path).resolve(filename).toString()));
        });

        post("/api/file/download", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            String p = Objects.toString(body.getOrDefault("path", " "));
            Path full = Paths.get(this.FILE_ROOT).resolve(p).normalize();
            if (!full.startsWith(Paths.get(this.FILE_ROOT)) || !Files.exists(full)) halt(404);
            byte[] data = Files.readAllBytes(full);
            res.type("application/octet-stream");
            res.header("X-File-Size", String.valueOf(data.length));
            res.header("X-Original-Path", p);
            return data;
        });

        delete("/api/file", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            List<String> paths = (List<String>) (body != null ? body.getOrDefault("paths", new ArrayList<>()) : new ArrayList<>());
            List<Map<String, Object>> results = new ArrayList<>();
            for (String p : paths) {
                Path full = Paths.get(this.FILE_ROOT).resolve(p).normalize();
                Map<String, Object> r = new HashMap<>();
                r.put("path", p);
                try {
                    if (Files.isDirectory(full))
                        Files.walk(full).sorted(Comparator.reverseOrder()).map(Path::toFile).forEach(File::delete);
                    else
                        Files.deleteIfExists(full);
                    r.put("status", "deleted");
                } catch (Exception e) {
                    r.put("status", "error");
                    r.put("message", e.getMessage());
                }
                results.add(r);
            }
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "results", results));
        });

        put("/api/file", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            Map<String, String> moveMap = new HashMap<>();
            if (body != null) {
                for (Map.Entry<String, Object> entry : body.entrySet()) {
                    moveMap.put(String.valueOf(entry.getKey()), String.valueOf(entry.getValue()));
                }
            }
            List<Map<String, Object>> results = new ArrayList<>();
            for (Map.Entry<String, String> e : moveMap.entrySet()) {
                Path src = Paths.get(this.FILE_ROOT).resolve(e.getKey()).normalize();
                Path dst = Paths.get(this.FILE_ROOT).resolve(e.getValue()).normalize();
                Map<String, Object> r = new HashMap<>();
                r.put("from", e.getKey());
                r.put("to", e.getValue());
                try {
                    Files.createDirectories(dst.getParent());
                    Files.move(src, dst);
                    r.put("status", "ok");
                } catch (Exception ex) {
                    r.put("status", "error");
                    r.put("message", ex.getMessage());
                }
                results.add(r);
            }
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "total", results.size(), "success", results.size(), "results", results));
        });

        post("/api/file/cp", (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            Map<String, String> copyMap = new HashMap<>();
            if (body != null) {
                for (Map.Entry<String, Object> entry : body.entrySet()) {
                    copyMap.put(String.valueOf(entry.getKey()), String.valueOf(entry.getValue()));
                }
            }
            List<Map<String, Object>> results = new ArrayList<>();
            for (Map.Entry<String, String> e : copyMap.entrySet()) {
                Path src = Paths.get(this.FILE_ROOT).resolve(e.getKey()).normalize();
                Path dst = Paths.get(this.FILE_ROOT).resolve(e.getValue()).normalize();
                Map<String, Object> r = new HashMap<>();
                r.put("from", e.getKey());
                r.put("to", e.getValue());
                try {
                    if (Files.isDirectory(src)) {
                    } else {
                        Files.createDirectories(dst.getParent());
                        Files.copy(src, dst);
                    }
                    r.put("status", "ok");
                } catch (Exception ex) {
                    r.put("status", "error");
                    r.put("message", ex.getMessage());
                }
                results.add(r);
            }
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "total", results.size(), "success", results.size(), "results", results));
        });

        Object fileNewHandler = (Route) (req, res) -> {
            Map<String, Object> body = req.attribute("json_body");
            String p = Objects.toString(body != null ? body.getOrDefault("path", body.getOrDefault("dir", " ")) : " ");
            Path full = Paths.get(this.FILE_ROOT).resolve(p).normalize();
            if (!full.startsWith(Paths.get(this.FILE_ROOT))) halt(403);
            Files.createDirectories(full);
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "path", p));
        };
        post("/api/file/new", (Route) fileNewHandler);
        post("/api/file/mkdir", (Route) fileNewHandler);

        get("/api/task/onetime", (req, res) -> {
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "count", this.onetime.size(), "tasks", new ArrayList<>(this.onetime)));
        });

        post("/api/task/onetime", (req, res) -> {
            res.type("application/json");
            if (this.ONETIME_EXECUTED.get()) {
                halt(400, this.gson.toJson(Map.of("status", "error", "message", "Onetime tasks have already been executed in this lifecycle.")));
            }
            Object b = req.attribute("json_body");
            List<String> tasks = new ArrayList<>();
            if (b instanceof List) {
                for (Object o : (List<?>) b) tasks.add(String.valueOf(o));
            }
            if (tasks.isEmpty()) {
                return this.gson.toJson(Map.of("status", "ok", "count", 0, "message", "Task list is empty."));
            }
            if (!this.ONETIME_EXECUTED.compareAndSet(false, true)) {
                halt(400, this.gson.toJson(Map.of("status", "error", "message", "Onetime tasks can only be executed once per lifecycle.")));
            }
            this.onetime.clear();
            this.onetime.addAll(tasks);
            List<Map<String, Object>> executed = new ArrayList<>();
            for (int i = 0; i < this.onetime.size(); i++) {
                Map<String, Object> r = executeCommandSync(this.onetime.get(i), null);
                Map<String, Object> entry = Map.of(
                        "index", i,
                        "cmd", this.onetime.get(i),
                        "exitcode", r.get("exitcode"),
                        "output", r.get("result"),
                        "status", ((int) r.get("exitcode") == 0 ? "ok " : "error ")
                );
                this.onetime_log.add(Map.of("ts", new Date().toString(), "cmd", this.onetime.get(i), "output", r.get("result"), "exitcode", r.get("exitcode"), "type", "onetime"));
                executed.add(entry);
            }
            return this.gson.toJson(Map.of("status", "ok", "count", this.onetime.size(), "tasks", this.onetime, "executed", executed));
        });

        Object taskExecuteHandler = (Route) (req, res) -> {
            res.type("application/json");
            if (this.onetime.isEmpty()) {
                return this.gson.toJson(Map.of("status", "ok", "executed", 0, "results", new ArrayList<>(), "message", "No tasks configured to execute."));
            }
            List<Map<String, Object>> executed = new ArrayList<>();
            for (String cmd : new ArrayList<>(this.onetime)) {
                Map<String, Object> r = executeCommandSync(cmd, null);
                executed.add(Map.of(
                        "cmd", cmd,
                        "exitcode", r.get("exitcode"),
                        "output", r.get("result"),
                        "timeout", r.get("timeout")
                ));
                this.onetime_log.add(Map.of(
                        "ts", new Date().toString(),
                        "cmd", cmd,
                        "output", r.get("result"),
                        "exitcode", r.get("exitcode"),
                        "type", "onetime"
                ));
            }
            return this.gson.toJson(Map.of(
                    "status", "ok",
                    "executed", executed.size(),
                    "results", executed
            ));
        };
        post("/api/task/onetime/execute", (Route) taskExecuteHandler);
        post("/api/task/onetime/start", (Route) taskExecuteHandler);

        get("/api/task/cron", (req, res) -> {
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "count", this.crons.size(), "tasks", this.crons));
        });

        post("/api/task/cron", (req, res) -> {
            Object b = req.attribute("json_body");
            Map<String, String> tasks = new HashMap<>();
            if (b instanceof Map) {
                for (Map.Entry<?, ?> entry : ((Map<?, ?>) b).entrySet()) {
                    tasks.put(String.valueOf(entry.getKey()), String.valueOf(entry.getValue()));
                }
            }
            this.crons.clear();
            this.crons.putAll(tasks);
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "count", this.crons.size(), "tasks", this.crons));
        });

        get("/api/task/status", (req, res) -> {
            res.type("application/json");
            return this.gson.toJson(Map.of("onetime", Map.of("pending", this.onetime.size() > 0, "count", this.onetime.size()), "cron", Map.of("active", this.crons.size() > 0, "count", this.crons.size(), "check_interval", 30)));
        });

        get("/api/task/log/onetime", (req, res) -> {
            int limit = 50;
            String limitParam = req.queryParams("limit");
            if (limitParam != null) {
                try {
                    limit = Integer.parseInt(limitParam);
                } catch (Exception ignored) {
                }
            }
            List<Map<String, Object>> logs = this.onetime_log.subList(Math.max(0, this.onetime_log.size() - limit), this.onetime_log.size());
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "count", logs.size(), "logs", logs));
        });

        get("/api/task/log/cron", (req, res) -> {
            int limit = 50;
            String limitParam = req.queryParams("limit");
            if (limitParam != null) {
                try {
                    limit = Integer.parseInt(limitParam);
                } catch (Exception ignored) {
                }
            }
            List<Map<String, Object>> logs = this.cron_log.subList(Math.max(0, this.cron_log.size() - limit), this.cron_log.size());
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "count", logs.size(), "logs", logs));
        });

        delete("/api/task/log/onetime", (req, res) -> {
            this.onetime_log.clear();
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "cleared", "onetime"));
        });
        delete("/api/task/log/cron", (req, res) -> {
            this.cron_log.clear();
            res.type("application/json");
            return this.gson.toJson(Map.of("status", "ok", "cleared", "cron"));
        });
        get("/api/task/log/summary", (req, res) -> {
            res.type("application/json");
            return this.gson.toJson(Map.of(
                    "onetime", Map.of("total_logged", this.onetime_log.size(), "max_capacity", 100, "recent_success", this.onetime_log.stream().filter(l -> Integer.valueOf(String.valueOf(l.getOrDefault("exitcode", 0))) == 0).count(), "recent_failed", this.onetime_log.stream().filter(l -> Integer.valueOf(String.valueOf(l.getOrDefault("exitcode", 0))) != 0).count()),
                    "cron", Map.of("total_logged", this.cron_log.size(), "max_capacity", 100, "recent_success", this.cron_log.stream().filter(l -> Integer.valueOf(String.valueOf(l.getOrDefault("exitcode", 0))) == 0).count(), "recent_failed", this.cron_log.stream().filter(l -> Integer.valueOf(String.valueOf(l.getOrDefault("exitcode", 0))) != 0).count())
            ));
        });

        get("/", (req, res) -> "kisama-running");

        after((req, res) -> {
            res.header("X-Agent-Version", "0.1.0-java");
            if ("OPTIONS".equalsIgnoreCase(req.requestMethod())) {
                res.header("X-Encrypted", "false");
                return;
            }
            if (res.body() != null && !res.body().isBlank()) {
                if (!this.DEBUG) {
                    log("[TRACE-OUT] <<< 捕获到出口明文响应流，长度: " + res.body().length());
                    try {
                        String encrypted = encryptResponse(res.body().getBytes(StandardCharsets.UTF_8));
                        if (encrypted != null) {
                            res.body(encrypted);
                            res.header("X-Encrypted", "true");
                            log("[TRACE-OUT] ✅ 响应 ECIES 密文流成功完成终极封包并挂载");
                        } else {
                            log("[TRACE-OUT] ❌ 加密处理层无密文返回 (null)");
                            res.status(500);
                            res.body(this.gson.toJson(Map.of("error", "Crypto Error: Uninitialized")));
                        }
                    } catch (Exception e) {
                        log("[TRACE-OUT] ❌ 加密流在底层崩溃爆破: " + e.getMessage());
                        res.status(500);
                        res.body(this.gson.toJson(Map.of("error", "Crypto Exception: " + e.getMessage())));
                    }
                } else {
                    res.header("X-Encrypted", "false");
                }
            }
        });

        isRunning = true;
    }

    public void stop() {
        if (!isRunning) return;
        log("[TRACE-INIT] 正在关闭 Kisama Agent...");
        spark.Spark.stop();
        // 🌟 核心补全：在内部强制阻塞主线程，死等 Jetty 清理完所有 Servlet 并彻底烟消云散！
        // 这样可以确保在该方法返回前，所有类加载行为全部安全结束。
        spark.Spark.awaitStop();
        this.scheduler.shutdownNow();
        try {
            if (!this.scheduler.awaitTermination(5, TimeUnit.SECONDS)) {
                log("[TRACE-INIT] ⚠️ 调度器未能在 5 秒内完全关闭");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        isRunning = false;
        log("[TRACE-INIT] ✅ Kisama Agent 已安全关闭。");
    }

    public static void main(String[] args) throws Exception {
        kisama agent = new kisama();
        agent.start();
        Thread.currentThread().join();
    }

    // ==================== 辅助方法 (原 static 方法改造为实例方法) ====================
    public void log(String message) {
        if (this.LOG) {
            System.out.println(message);
        }
    }

    private String getKeyWithFallback(String envVarName, String filename, String hardcodedDefault) {
        String envValue = System.getenv(envVarName);
        if (envValue != null && !envValue.isBlank()) {
            return envValue.trim();
        }
        String fileValue = readKeyFile(filename);
        if (fileValue != null && !fileValue.isBlank()) {
            return fileValue;
        }
        return hardcodedDefault;
    }

    private String bytesToHex(byte[] bytes) {
        if (bytes == null) return "null";
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }

    private void applyCorsHeaders(spark.Response res) {
        res.raw().setHeader("Access-Control-Allow-Origin", "*");
        res.raw().setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.raw().setHeader("Access-Control-Allow-Headers", "content-type, user-agent, authorization, x-nonce, x-timestamp, x-auth-token, x-aes-encrypted, x-debug");
        res.raw().setHeader("Access-Control-Expose-Headers", "x-encrypted, x-agent-version, x-file-size, x-original-path");
        res.raw().setHeader("Access-Control-Max-Age", "86400");
    }

    private void appendLogWithCap(List<Map<String, Object>> logList, Map<String, Object> entry) {
        synchronized (logList) {
            if (logList.size() >= 100) {
                logList.remove(0);
            }
            logList.add(entry);
        }
    }

    private Map<String, Object> buildBaseInfo() throws Exception {
        Map<String, Object> obj = new LinkedHashMap<>();
        Map<String, String> ips = getPrimaryIpAddresses();

        obj.put("arch", normalizeArch(System.getProperty("os.arch", " ")));
        obj.put("cpu_cores", Runtime.getRuntime().availableProcessors());
        obj.put("cpu_name", getCpuName());
        obj.put("disk_total", Files.getFileStore(Paths.get(this.FILE_ROOT)).getTotalSpace());
        obj.put("gpu_name", getGpuName());
        obj.put("ipv4", emptyToNull(ips.get("ipv4")));
        obj.put("ipv6", emptyToNull(ips.get("ipv6")));
        obj.put("mem_total", getTotalMemoryBytes());
        obj.put("os", getOsPrettyName());
        obj.put("kernel_version", getKernelVersion());
        obj.put("swap_total", getTotalSwapBytes());
        obj.put("version", "0.1.0-java");
        obj.put("virtualization", getVirtualization());
        obj.put("session_key", Base64.getEncoder().encodeToString(this.SESSION_KEY));

        Map<String, Object> noise = Map.of(
                "controller", Map.of("private", this.CTRL_PRIVATE_KEY_B64),
                "agent", Map.of("public", this.AGENT_PUBLIC_KEY_B64)
        );
        obj.put("noise_key", noise);
        return obj;
    }

    private String normalizeArch(String arch) {
        if (arch == null) return " ";
        String a = arch.toLowerCase(Locale.ROOT);
        if ("amd64".equals(a) || "x86-64".equals(a)) return "x86_64";
        if ("aarch64".equals(a) || "arm64".equals(a)) return "aarch64";
        if ("i386".equals(a) || "i486".equals(a) || "i586".equals(a) || "i686".equals(a) || "x86".equals(a)) return "x86";
        return arch;
    }

    private Object emptyToNull(String s) {
        return (s == null || s.isBlank()) ? null : s;
    }

    private String getCpuName() {
        String cpu = readProcCpuInfoValue("model name");
        if (cpu == null) cpu = readProcCpuInfoValue("Hardware");
        if (cpu == null) cpu = readProcCpuInfoValue("Processor");
        if (cpu == null) cpu = firstLine(runCommand(1500, "sysctl", "-n", "machdep.cpu.brand_string"));
        if (cpu == null || cpu.isBlank()) cpu = System.getenv("PROCESSOR_IDENTIFIER");
        if (cpu == null || cpu.isBlank()) cpu = System.getProperty("os.arch", "UnknownCPU");
        return cpu.trim();
    }

    private String readProcCpuInfoValue(String key) {
        Path p = Paths.get("/proc/cpuinfo");
        if (!Files.isReadable(p)) return null;
        try {
            for (String line : Files.readAllLines(p, StandardCharsets.UTF_8)) {
                int idx = line.indexOf(':');
                if (idx <= 0) continue;
                String k = line.substring(0, idx).trim();
                if (k.equalsIgnoreCase(key)) {
                    String v = line.substring(idx + 1).trim();
                    if (!v.isBlank()) return v;
                }
            }
        } catch (Exception ignored) {
        }
        return null;
    }

    private long getTotalMemoryBytes() {
        long memInfo = readMemInfoBytes("MemTotal");
        long cgroupLimit = readCgroupMemoryLimitBytes();
        if (memInfo > 0 && cgroupLimit > 0) {
            return Math.min(memInfo, cgroupLimit);
        }
        if (cgroupLimit > 0) return cgroupLimit;
        if (memInfo > 0) return memInfo;
        try {
            java.lang.management.OperatingSystemMXBean bean = ManagementFactory.getOperatingSystemMXBean();
            if (bean instanceof com.sun.management.OperatingSystemMXBean) {
                com.sun.management.OperatingSystemMXBean sunBean = (com.sun.management.OperatingSystemMXBean) bean;
                long total = sunBean.getTotalPhysicalMemorySize();
                if (total > 0) return total;
            }
        } catch (Exception ignored) {
        }
        return 0L;
    }

    private long getTotalSwapBytes() {
        long swap = readMemInfoBytes("SwapTotal");
        if (swap > 0) return swap;
        try {
            java.lang.management.OperatingSystemMXBean bean = ManagementFactory.getOperatingSystemMXBean();
            if (bean instanceof com.sun.management.OperatingSystemMXBean) {
                com.sun.management.OperatingSystemMXBean sunBean = (com.sun.management.OperatingSystemMXBean) bean;
                long total = sunBean.getTotalSwapSpaceSize();
                if (total > 0) return total;
            }
        } catch (Exception ignored) {
        }
        return 0L;
    }

    private long readMemInfoBytes(String key) {
        Path p = Paths.get("/proc/meminfo");
        if (!Files.isReadable(p)) return 0L;
        try {
            for (String line : Files.readAllLines(p, StandardCharsets.UTF_8)) {
                if (!line.startsWith(key + ":")) continue;
                String[] parts = line.split("\\s+");
                if (parts.length >= 2) {
                    return Long.parseLong(parts[1]) * 1024L;
                }
            }
        } catch (Exception ignored) {
        }
        return 0L;
    }

    private long readCgroupMemoryLimitBytes() {
        String[] candidates = {
                "/sys/fs/cgroup/memory.max",
                "/sys/fs/cgroup/memory/memory.limit_in_bytes"
        };
        for (String c : candidates) {
            try {
                Path p = Paths.get(c);
                if (!Files.isReadable(p)) continue;
                String raw = Files.readString(p).trim();
                if (raw.isBlank() || "max".equalsIgnoreCase(raw)) continue;
                long v = Long.parseLong(raw);
                if (v > 0 && v < Long.MAX_VALUE / 4096L) return v;
            } catch (Exception ignored) {
            }
        }
        return 0L;
    }

    private String getOsPrettyName() {
        Path p = Paths.get("/etc/os-release");
        if (Files.isReadable(p)) {
            try {
                for (String line : Files.readAllLines(p, StandardCharsets.UTF_8)) {
                    if (line.startsWith("PRETTY_NAME=")) {
                        return stripShellQuotes(line.substring("PRETTY_NAME=".length()).trim());
                    }
                }
            } catch (Exception ignored) {
            }
        }
        String name = System.getProperty("os.name", " ");
        String version = System.getProperty("os.version", " ");
        return (name + " " + version).trim();
    }

    private String getKernelVersion() {
        String kernel = firstLine(runCommand(1500, "uname", "-r"));
        if (kernel != null && !kernel.isBlank()) return kernel.trim();
        return System.getProperty("os.version", " ");
    }

    private Map<String, String> getPrimaryIpAddresses() {
        String ipv4 = null;
        String ipv6 = null;
        String extIp = fetchExternalIp();
        if (extIp != null) {
            if (extIp.contains(":")) {
                ipv6 = extIp;
                log("[TRACE-NET] 成功通过外部接口获取公网 IPv6: " + ipv6);
            } else {
                ipv4 = extIp;
                log("[TRACE-NET] 成功通过外部接口获取公网 IPv4: " + ipv4);
            }
        }
        if (ipv4 == null || ipv6 == null) {
            try {
                Enumeration<java.net.NetworkInterface> nics = java.net.NetworkInterface.getNetworkInterfaces();
                while (nics != null && nics.hasMoreElements()) {
                    java.net.NetworkInterface nic = nics.nextElement();
                    try {
                        if (!nic.isUp() || nic.isLoopback() || nic.isVirtual()) continue;
                    } catch (Exception ignored) {
                        continue;
                    }
                    Enumeration<java.net.InetAddress> addrs = nic.getInetAddresses();
                    while (addrs.hasMoreElements()) {
                        java.net.InetAddress addr = addrs.nextElement();
                        if (addr.isLoopbackAddress() || addr.isLinkLocalAddress()) continue;
                        if (ipv4 == null && addr instanceof java.net.Inet4Address) {
                            ipv4 = addr.getHostAddress();
                        } else if (ipv6 == null && addr instanceof java.net.Inet6Address) {
                            String h = addr.getHostAddress();
                            int zone = h.indexOf('%');
                            ipv6 = zone >= 0 ? h.substring(0, zone) : h;
                        }
                        if (ipv4 != null && ipv6 != null) {
                            break;
                        }
                    }
                    if (ipv4 != null && ipv6 != null) {
                        break;
                    }
                }
            } catch (Exception ignored) {
            }
        }
        Map<String, String> result = new HashMap<>();
        result.put("ipv4", ipv4);
        result.put("ipv6", ipv6);
        return result;
    }

    private String fetchExternalIp() {
        String[] services = {
                "https://api.ipify.org",
                "https://icanhazip.com",
                "https://checkip.amazonaws.com",
                "https://ifconfig.me/ip",
                "https://ipecho.net/plain",
                "https://ipinfo.io/ip",
                "https://myexternalip.com/raw"
        };
        java.net.http.HttpClient client = java.net.http.HttpClient.newBuilder()
                .connectTimeout(java.time.Duration.ofSeconds(2))
                .build();
        for (String service : services) {
            try {
                java.net.http.HttpRequest request = java.net.http.HttpRequest.newBuilder()
                        .uri(java.net.URI.create(service))
                        .timeout(java.time.Duration.ofSeconds(2))
                        .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) KisamaAgent/0.1.0")
                        .GET()
                        .build();
                java.net.http.HttpResponse<String> response = client.send(
                        request,
                        java.net.http.HttpResponse.BodyHandlers.ofString()
                );
                if (response.statusCode() == 200) {
                    String ip = response.body().trim();
                    if (!ip.isBlank() && !ip.contains("<") && !ip.contains(" ") && ip.length() <= 45) {
                        return ip;
                    }
                }
            } catch (Exception e) {
                if (this.DEBUG) {
                    log("[TRACE-NET] 外部接口 " + service + " 连接失败，正在尝试下一个...");
                }
            }
        }
        return null;
    }

    private String getGpuName() {
        String gpu = firstLine(runCommand(2000, "nvidia-smi", "--query-gpu=name", "--format=csv,noheader"));
        if (gpu != null && !gpu.isBlank()) return gpu.trim();
        String lspci = runCommand(2000, "lspci");
        if (lspci != null) {
            for (String line : lspci.split("\\R")) {
                String lower = line.toLowerCase(Locale.ROOT);
                if (lower.contains("vga compatible controller") || lower.contains("3d controller") || lower.contains("display controller")) {
                    int idx = line.lastIndexOf(':');
                    return idx >= 0 ? line.substring(idx + 1).trim() : line.trim();
                }
            }
        }
        return " ";
    }

    private String getVirtualization() {
        if (Files.exists(Paths.get("/.dockerenv"))) return "Docker";
        if (System.getenv("KUBERNETES_SERVICE_HOST") != null) return "Kubernetes";
        String cgroup = readSmallFile("/proc/1/cgroup");
        if (cgroup != null) {
            String lower = cgroup.toLowerCase(Locale.ROOT);
            if (lower.contains("docker")) return "Docker";
            if (lower.contains("kubepods") || lower.contains("kubernetes")) return "Kubernetes";
            if (lower.contains("lxc")) return "LXC";
            if (lower.contains("containerd")) return "containerd";
        }
        String wsl = System.getenv("WSL_DISTRO_NAME");
        if (wsl != null && !wsl.isBlank()) return "WSL";
        String detected = firstLine(runCommand(1500, "systemd-detect-virt"));
        if (detected != null && !detected.isBlank() && !"none".equalsIgnoreCase(detected.trim())) {
            return detected.trim();
        }
        return "None";
    }

    private String readSmallFile(String path) {
        try {
            Path p = Paths.get(path);
            if (Files.isReadable(p)) return Files.readString(p);
        } catch (Exception ignored) {
        }
        return null;
    }

    private String stripShellQuotes(String s) {
        if (s == null || s.length() < 2) return s;
        if ((s.startsWith("\"") && s.endsWith("\"")) || (s.startsWith("'") && s.endsWith("'"))) {
            return s.substring(1, s.length() - 1);
        }
        return s;
    }

    private String firstLine(String s) {
        if (s == null) return null;
        for (String line : s.split("\\R")) {
            if (!line.isBlank()) return line.trim();
        }
        return null;
    }

    private String runCommand(long timeoutMs, String... cmd) {
        try {
            ProcessBuilder pb = new ProcessBuilder(cmd);
            pb.redirectErrorStream(true);
            Process p = pb.start();
            boolean ok = p.waitFor(timeoutMs, TimeUnit.MILLISECONDS);
            if (!ok) {
                p.destroyForcibly();
                return null;
            }
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            p.getInputStream().transferTo(baos);
            if (p.exitValue() != 0) return null;
            return baos.toString(StandardCharsets.UTF_8);
        } catch (Exception ignored) {
            return null;
        }
    }

    private Map<String, Object> executeCommandSync(String cmd, String cwd) {
        Map<String, Object> out = new HashMap<>();
        if (cmd == null) cmd = " ";
        try {
            List<String> parts = Arrays.asList("/bin/sh", "-c", cmd);
            ProcessBuilder pb = new ProcessBuilder(parts);
            if (cwd != null && !cwd.isBlank()) pb.directory(new File(cwd));
            pb.redirectErrorStream(true);
            Process p = pb.start();
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            p.getInputStream().transferTo(baos);
            int code = p.waitFor();
            out.put("result", baos.toString(StandardCharsets.UTF_8));
            out.put("exitcode", code);
            out.put("timeout", false);
        } catch (Exception e) {
            out.put("result", e.getMessage());
            out.put("exitcode", -1);
            out.put("timeout", false);
        }
        return out;
    }

    private List<Map<String, Object>> listFiles(String dirPath, boolean recursive) throws IOException {
        Path dir = Paths.get(this.FILE_ROOT).resolve(dirPath).normalize();
        if (!dir.startsWith(Paths.get(this.FILE_ROOT))) throw new IOException("Access denied");
        List<Map<String, Object>> out = new ArrayList<>();
        if (!Files.exists(dir)) return out;
        try (var stream = Files.list(dir)) {
            stream.forEach(p -> {
                try {
                    var s = Files.readAttributes(p, java.nio.file.attribute.BasicFileAttributes.class);
                    Map<String, Object> info = new LinkedHashMap<>();
                    info.put("name", p.getFileName().toString());
                    info.put("path", Paths.get(this.FILE_ROOT).relativize(p).toString());
                    info.put("type", s.isDirectory() ? "directory " : "file ");
                    info.put("size", s.size());
                    info.put("mtime", new Date(s.lastModifiedTime().toMillis()).toString());
                    info.put("mode", "-rw-r--r--");
                    info.put("mode_octal", "0o644");
                    info.put("owner", "0:0");
                    out.add(info);
                } catch (Exception ignored) {
                }
            });
        }
        return out;
    }

    private boolean isBinary(byte[] data) {
        for (int i = 0; i < Math.min(512, data.length); i++) if (data[i] == 0) return true;
        return false;
    }

    private void initCrypto() {
        log("[TRACE-CRYPTO] 注册 BouncyCastle 核心密码学环境提供者...");
        if (Security.getProvider(BouncyCastleProvider.PROVIDER_NAME) == null) {
            Security.addProvider(new BouncyCastleProvider());
        }
        try {
            byte[] ctrlPriv = new byte[32];
            byte[] ctrlPub = new byte[32];
            byte[] agentPriv = new byte[32];
            byte[] agentPub = new byte[32];
            SecureRandom rand = new SecureRandom();
            org.bouncycastle.math.ec.rfc7748.X25519.generatePrivateKey(rand, ctrlPriv);
            org.bouncycastle.math.ec.rfc7748.X25519.generatePublicKey(ctrlPriv, 0, ctrlPub, 0);
            org.bouncycastle.math.ec.rfc7748.X25519.generatePrivateKey(rand, agentPriv);
            org.bouncycastle.math.ec.rfc7748.X25519.generatePublicKey(agentPriv, 0, agentPub, 0);
            this.CTRL_PRIVATE_KEY_B64 = Base64.getEncoder().encodeToString(ctrlPriv);
            this.AGENT_PUBLIC_KEY_B64 = Base64.getEncoder().encodeToString(agentPub);
            System.arraycopy(agentPriv, 0, this.AGENT_PRIVATE_KEY, 0, 32);
            System.arraycopy(ctrlPub, 0, this.CONTROL_PUBLIC_KEY, 0, 32);
            log("[TRACE-CRYPTO] ✅ 成功激活全局超级终端 Noise 静态拓扑密钥链");
        } catch (Exception e) {
            log("[TRACE-CRYPTO] ❌ 初始化 Noise 密钥失败: " + e.getMessage());
        }
        if (this.ECDSA_PUBLIC_KEY_B64 != null && !this.ECDSA_PUBLIC_KEY_B64.isBlank()) {
            try {
                this.ECDSA_PUBLIC_KEY = loadEcdsaPublicKey(this.ECDSA_PUBLIC_KEY_B64);
            } catch (Exception ignored) {
            }
        }
        if (this.ECIES_PUBLIC_KEY_B64 != null && !this.ECIES_PUBLIC_KEY_B64.isBlank()) {
            try {
                this.ECIES_PUBLIC_KEY = Base64.getDecoder().decode(this.ECIES_PUBLIC_KEY_B64.trim());
            } catch (Exception ignored) {
            }
        }
    }

    private String readKeyFile(String filename) {
        Path path = Paths.get(this.KEYS_DIR).resolve(filename);
        if (Files.exists(path)) {
            try {
                return Files.readString(path).trim();
            } catch (IOException ignored) {
            }
        }
        return null;
    }

    private PublicKey loadEcdsaPublicKey(String keyText) throws Exception {
        String s = keyText.trim();
        if (s.contains("-----BEGIN PUBLIC KEY-----")) {
            String normalized = s
                    .replaceAll("-----BEGIN PUBLIC KEY-----", " ")
                    .replaceAll("-----END PUBLIC KEY-----", " ")
                    .replaceAll("\\s+", " ");
            X509EncodedKeySpec spec = new X509EncodedKeySpec(Base64.getDecoder().decode(normalized));
            return KeyFactory.getInstance("EC", "BC").generatePublic(spec);
        }
        byte[] raw = Base64.getDecoder().decode(s.replaceAll("\\s+", " "));
        boolean compressedPoint = raw.length == 33 && (raw[0] == 0x02 || raw[0] == 0x03);
        boolean uncompressedPoint = raw.length == 65 && raw[0] == 0x04;
        if (compressedPoint || uncompressedPoint) {
            ECNamedCurveParameterSpec ecSpec = ECNamedCurveTable.getParameterSpec("secp256r1");
            if (ecSpec == null) {
                ecSpec = ECNamedCurveTable.getParameterSpec("prime256v1");
            }
            ECPoint q = ecSpec.getCurve().decodePoint(raw).normalize();
            ECPublicKeySpec pubSpec = new ECPublicKeySpec(q, ecSpec);
            return KeyFactory.getInstance("EC", "BC").generatePublic(pubSpec);
        }
        X509EncodedKeySpec spec = new X509EncodedKeySpec(raw);
        return KeyFactory.getInstance("EC", "BC").generatePublic(spec);
    }

    private void verifySignature(String nonce, String timestamp, String authToken) throws Exception {
        if (this.ECDSA_PUBLIC_KEY == null) throw new IllegalStateException("ECDSA public key not configured");
        long ts = Long.parseLong(timestamp);
        if (Math.abs((System.currentTimeMillis() / 1000) - ts) > 60)
            throw new IllegalArgumentException("Timestamp expired");
        Signature sig = Signature.getInstance("SHA256withECDSA");
        sig.initVerify(this.ECDSA_PUBLIC_KEY);
        sig.update((nonce + timestamp).getBytes(StandardCharsets.UTF_8));
        if (!sig.verify(Base64.getDecoder().decode(authToken)))
            throw new IllegalArgumentException("Signature mismatch");
    }

    private byte[] hkdfSha256(byte[] ikm, int outLen) throws Exception {
        Mac mac = Mac.getInstance("HmacSHA256", "BC");
        mac.init(new SecretKeySpec(new byte[32], "HmacSHA256"));
        byte[] prk = mac.doFinal(ikm);
        mac.init(new SecretKeySpec(prk, "HmacSHA256"));
        mac.update(new byte[]{0x01});
        byte[] okm = mac.doFinal();
        byte[] result = new byte[outLen];
        System.arraycopy(okm, 0, result, 0, outLen);
        return result;
    }

    private String encryptResponse(byte[] plaintext) throws Exception {
        if (this.ECIES_PUBLIC_KEY == null) return null;
        log("[TRACE-ECIES] 启动标准 ECIES 加密包封装...  ");
        ECNamedCurveParameterSpec ecSpec = ECNamedCurveTable.getParameterSpec("secp256k1");
        ECPoint receiverPoint = ecSpec.getCurve().decodePoint(this.ECIES_PUBLIC_KEY);
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("EC", "BC");
        kpg.initialize(ecSpec);
        KeyPair ephemeralKeyPair = kpg.generateKeyPair();
        org.bouncycastle.jce.interfaces.ECPublicKey ecEphemPubKey = (org.bouncycastle.jce.interfaces.ECPublicKey) ephemeralKeyPair.getPublic();
        byte[] ephemeralPubKeyBytes = ecEphemPubKey.getQ().getEncoded(false);
        log("  -> [Step 1] 产生会话非压缩临时公钥 (65字节): " + bytesToHex(ephemeralPubKeyBytes));
        org.bouncycastle.jce.interfaces.ECPrivateKey ecPrivKey = (org.bouncycastle.jce.interfaces.ECPrivateKey) ephemeralKeyPair.getPrivate();
        ECPoint sharedPoint = receiverPoint.multiply(ecPrivKey.getD()).normalize();
        byte[] sharedPointBytes = sharedPoint.getEncoded(false);
        byte[] master = new byte[ephemeralPubKeyBytes.length + sharedPointBytes.length];
        System.arraycopy(ephemeralPubKeyBytes, 0, master, 0, ephemeralPubKeyBytes.length);
        System.arraycopy(sharedPointBytes, 0, master, ephemeralPubKeyBytes.length, sharedPointBytes.length);
        byte[] aesKey = hkdfSha256(master, 32);
        log("  -> [Step 2] ECIES HKDF master 长度: " + master.length + " = ephemeralPubKey(" + ephemeralPubKeyBytes.length + ") + sharedPoint(" + sharedPointBytes.length + ")");
        log("  -> [Step 3] HKDF 派生 AES-256 key: " + bytesToHex(aesKey));
        byte[] nonce = new byte[16];
        new SecureRandom().nextBytes(nonce);
        log("  -> [Step 4] 生产纯随机、非派生的 16 字节标准 AES-GCM 传输 Nonce: " + bytesToHex(nonce));
        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding", "BC");
        GCMParameterSpec gcmSpec = new GCMParameterSpec(128, nonce);
        cipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(aesKey, "AES"), gcmSpec);
        byte[] ciphertextWithTag = cipher.doFinal(plaintext);
        log("  -> [Step 5] 对称运算完成，复合密文流（含尾部 Tag）长度: " + ciphertextWithTag.length + "字节  ");
        int ciphertextLen = ciphertextWithTag.length - 16;
        byte[] ciphertextPure = new byte[ciphertextLen];
        byte[] tag = new byte[16];
        System.arraycopy(ciphertextWithTag, 0, ciphertextPure, 0, ciphertextLen);
        System.arraycopy(ciphertextWithTag, ciphertextLen, tag, 0, 16);
        byte[] result = new byte[65 + 16 + 16 + ciphertextLen];
        System.arraycopy(ephemeralPubKeyBytes, 0, result, 0, 65);
        System.arraycopy(nonce, 0, result, 65, 16);
        System.arraycopy(tag, 0, result, 81, 16);
        System.arraycopy(ciphertextPure, 0, result, 97, ciphertextLen);
        String finalB64 = Base64.getEncoder().encodeToString(result);
        log("  -> [Step 6] 🏁 ECIES 官方标准打包合流完成。Base64 前30位: " + finalB64.substring(0, Math.min(30, finalB64.length())));
        return finalB64;
    }

    private String decryptAesPayload(String outerBase64Json, byte[] key) throws Exception {
        byte[] outer = Base64.getDecoder().decode(outerBase64Json);
        Map<String, String> m = this.gson.fromJson(new String(outer, StandardCharsets.UTF_8), new TypeToken<Map<String, String>>() {
        }.getType());
        byte[] iv = Base64.getDecoder().decode(m.get("nonce"));
        byte[] tag = Base64.getDecoder().decode(m.get("tag"));
        byte[] cipher = Base64.getDecoder().decode(m.get("ciphertext"));
        Cipher c = Cipher.getInstance("AES/GCM/NoPadding", "BC");
        GCMParameterSpec spec = new GCMParameterSpec(128, iv);
        c.init(Cipher.DECRYPT_MODE, new SecretKeySpec(key, "AES"), spec);
        byte[] ctWithTag = new byte[cipher.length + tag.length];
        System.arraycopy(cipher, 0, ctWithTag, 0, cipher.length);
        System.arraycopy(tag, 0, ctWithTag, cipher.length, tag.length);
        return new String(c.doFinal(ctWithTag), StandardCharsets.UTF_8);
    }

    // ==================== 内部类重构：改为 static 静态内部类，彻底解决反射膨胀 Bug ====================
    @WebSocket
    public static class KisamaWebSocketHandler {
        private final kisama agent; // 👈 显式持有外部引用
        private final Map<Session, TerminalSession> activeSessions = new ConcurrentHashMap<>();

        public KisamaWebSocketHandler(kisama agent) {
            this.agent = agent;
        }

        @OnWebSocketConnect
        public void onConnect(Session session) {
            try {
                Map<String, List<String>> queryParams = session.getUpgradeRequest().getParameterMap();
                List<String> rIds = queryParams.get("request_id");
                if (rIds == null || rIds.isEmpty()) {
                    session.close(1008, "Missing request_id");
                    return;
                }
                String requestId = rIds.get(0);
                List<String> tokens = queryParams.get("token");
                String token = (tokens != null && !tokens.isEmpty()) ? tokens.get(0) : null;
                agent.log("[TRACE-WS] 收到超级终端连接请求, request_id: " + requestId);
                
                // 传入 agent 实例
                TerminalSession terminalSession = new TerminalSession(this.agent, session, requestId, token);
                activeSessions.put(session, terminalSession);
                terminalSession.start();
            } catch (Exception e) {
                agent.log("[TRACE-WS] 终端进程初始化失败: " + e.getMessage());
                session.close(1011, "Internal server error");
            }
        }

        @OnWebSocketMessage
        public void onTextMessage(Session session, String message) {
            TerminalSession ts = activeSessions.get(session);
            if (ts != null) {
                ts.handleTextMessage(message);
            }
        }

        @OnWebSocketMessage
        public void onBinaryMessage(Session session, byte[] payload, int offset, int len) {
            TerminalSession ts = activeSessions.get(session);
            if (ts != null) {
                byte[] cleanData = Arrays.copyOfRange(payload, offset, offset + len);
                ts.handleBinaryMessage(cleanData);
            }
        }

        @OnWebSocketClose
        public void onClose(Session session, int statusCode, String reason) {
            TerminalSession ts = activeSessions.remove(session);
            if (ts != null) {
                ts.cleanup();
            }
            agent.log("[TRACE-WS] 超级终端会话正常断开: Code=" + statusCode + ", Reason=" + reason);
        }

        @OnWebSocketError
        public void onError(Session session, Throwable error) {
            TerminalSession ts = activeSessions.remove(session);
            if (ts != null) {
                ts.cleanup();
            }
            // 🌟 修正：通过 agent 实例调用非静态方法
            agent.log("[TRACE-WS] 超级终端异常捕获: " + error.getMessage());
            error.printStackTrace();
            if (error.getCause() != null) {
                agent.log("[TRACE-WS] 🚨 发现隐藏在框架底层的真实元凶：");
                error.getCause().printStackTrace();
            }
        }
    }

    // 👈 改为 static
    private static class TerminalSession {
        private final kisama agent; // 👈 显式持有外部引用
        private final Session wsSession;
        private final String requestId;
        private final String token;
        private final boolean useNoise;
        private PtyProcess ptyProcess;
        private int handshakePhase = 1;
        private NoiseSession noiseCipher;
        private OutputStream processStdin;
        private Thread pipeOutputThread;
        private volatile boolean isRunning = true;

        public TerminalSession(kisama agent, Session wsSession, String requestId, String token) {
            this.agent = agent;
            this.wsSession = wsSession;
            this.requestId = requestId;
            this.token = token;
            this.useNoise = (token == null || token.isBlank());
            if (this.useNoise) {
                this.noiseCipher = new NoiseSession(agent.AGENT_PRIVATE_KEY);
            }
        }

        public void start() throws Exception {
            if (!useNoise) {
                startProcess();
            } else {
                agent.log("[TRACE-WS] [" + requestId + "] 已就绪，挂起外壳进程，死等待 Noise 三次交互加密握手机制...");
            }
        }

        private void startProcess() throws Exception {
            Map<String, String> env = new HashMap<>(System.getenv());
            env.remove("PROMPT_COMMAND");
            env.put("TERM", "xterm-256color");
            env.put("LANG", "C.UTF-8");

            agent.log("[TRACE-WS] 🚀 正在使用 Pty4J 启动真正的原生伪终端...");

            String[] shellCmd = new File("/bin/bash").exists() ? 
                    new String[]{"/bin/bash"} : new String[]{"/bin/sh"};

            this.ptyProcess = new PtyProcessBuilder()
                    .setCommand(shellCmd)
                    .setEnvironment(env)
                    .setDirectory(agent.FILE_ROOT)
                    .start();

            this.processStdin = ptyProcess.getOutputStream();

            this.pipeOutputThread = new Thread(() -> {
                byte[] buffer = new byte[1024];
                try (InputStream processStdout = ptyProcess.getInputStream()) {
                    int readBytes;
                    while (isRunning && (readBytes = processStdout.read(buffer)) != -1) {
                        if (readBytes > 0) {
                            byte[] rawOutput = Arrays.copyOf(buffer, readBytes);
                            if (wsSession.isOpen()) {
                                if (useNoise) {
                                    rawOutput = noiseCipher.encryptTransport(rawOutput);
                                }
                                wsSession.getRemote().sendBytes(ByteBuffer.wrap(rawOutput));
                            }
                        }
                    }
                } catch (Exception ignored) {
                } finally {
                    cleanup();
                }
            });
            this.pipeOutputThread.setDaemon(true);
            this.pipeOutputThread.start();
        }

        public void handleTextMessage(String text) {
            if (useNoise && handshakePhase != 4) {
                agent.log("[TRACE-WS] 握手建立前拒绝处理任何明文文本包。");
                return;
            }
            processIncomingPayload(text.getBytes(StandardCharsets.UTF_8));
        }

        public void handleBinaryMessage(byte[] data) {
            if (useNoise) {
                if (handshakePhase == 1) {
                    try {
                        agent.log("[TRACE-WS] [" + requestId + "] 捕获 Noise 握手包 [Msg 1], 长度: " + data.length);
                        noiseCipher.readMsg1(data);
                        byte[] msg2 = noiseCipher.writeMsg2();
                        agent.log("[TRACE-WS] [" + requestId + "] 回发加密响应包 [Msg 2], 长度: " + msg2.length);
                        wsSession.getRemote().sendBytes(ByteBuffer.wrap(msg2));
                        handshakePhase = 3;
                    } catch (Exception e) {
                        agent.log("[TRACE-WS] Noise 第一阶段握手崩溃流产: " + e.getMessage());
                        cleanup();
                    }
                    return;
                } else if (handshakePhase == 3) {
                    try {
                        agent.log("[TRACE-WS] [" + requestId + "] 捕获最终确认包 [Msg 3], 长度: " + data.length);
                        noiseCipher.readMsg3(data);
                        agent.log("[TRACE-WS] ✅ Noise 握手大获成功！端到端隧道已锁定安全边界。");
                        handshakePhase = 4;
                        startProcess();
                    } catch (Throwable t) { // 🌟 核心修改：由 Exception 改为 Throwable，确保能捕获底层的 LinkageError
                        agent.log("[TRACE-WS] Noise 第二阶段核验或伪终端启动瞬间爆裂: " + t.getMessage());
                        t.printStackTrace(); // 打印底层真实的 Error 堆栈
                        cleanup();
                    }
                    return;
                } else if (handshakePhase == 4) {
                    try {
                        byte[] decrypted = noiseCipher.decryptTransport(data);
                        processIncomingPayload(decrypted);
                    } catch (Exception e) {
                        agent.log("[TRACE-WS] 运行期数据面解密 MAC 失败: " + e.getMessage());
                    }
                    return;
                }
            } else {
                processIncomingPayload(data);
            }
        }

        private void processIncomingPayload(byte[] payload) {
            if (!isRunning) return;
            try {
                String textMsg = new String(payload, StandardCharsets.UTF_8).trim();
                if (textMsg.startsWith("{")) {
                    try {
                        Map<String, Object> data = agent.gson.fromJson(textMsg, new TypeToken<Map<String, Object>>() {}.getType());
                        if (data != null && data.containsKey("type")) {
                            String frameType = Objects.toString(data.get("type"), "");
                            if ("heartbeat".equals(frameType)) {
                                wsSession.getRemote().sendString(agent.gson.toJson(Map.of("type", "heartbeat")));
                                return;
                            }
                            if ("resize".equals(frameType)) {
                                int cols = ((Double) data.getOrDefault("cols", 80.0)).intValue();
                                int rows = ((Double) data.getOrDefault("rows", 24.0)).intValue();
                                if (this.ptyProcess != null) {
                                    this.ptyProcess.setWinSize(new com.pty4j.WinSize(cols, rows));
                                }
                                return;
                            }
                            if ("input".equals(frameType) && data.containsKey("data")) {
                                String inputPayload = Objects.toString(data.get("data"), "");
                                if ("base64".equals(data.get("encoding"))) {
                                    writeRaw(Base64.getDecoder().decode(inputPayload));
                                } else {
                                    writeRaw(inputPayload.getBytes(StandardCharsets.UTF_8));
                                }
                                return;
                            }
                        }
                    } catch (Exception ignored) {
                    }
                }
                writeRaw(payload);
            } catch (Exception e) {
                agent.log("[TRACE-WS] 流洗涤分发器发生内部错误: " + e.getMessage());
            }
        }

        private void writeRaw(byte[] b) throws IOException {
            if (processStdin != null && isRunning) {
                processStdin.write(b);
                processStdin.flush();
            }
        }

        public void cleanup() {
            if (!isRunning) return;
            isRunning = false;
            try {
                if (ptyProcess != null) ptyProcess.destroyForcibly();
                if (wsSession.isOpen()) wsSession.close();
            } catch (Exception ignored) {
            }
        }
    }

    // 👈 改为 static
    private static class NoiseSession {
        byte[] ck = new byte[32];
        byte[] h = new byte[32];
        byte[] s_priv = new byte[32];
        byte[] s_pub = new byte[32];
        byte[] e_priv = new byte[32];
        byte[] e_pub = new byte[32];
        byte[] re = new byte[32];
        byte[] rs = new byte[32];
        byte[] k_send = new byte[32];
        byte[] k_recv = new byte[32];
        long n_send = 0;
        long n_recv = 0;
        byte[] k_handshake = new byte[32];
        long n_handshake = 0;
        boolean hasKey = false;

        public NoiseSession(byte[] localStaticPriv) {
            System.arraycopy(localStaticPriv, 0, this.s_priv, 0, 32);
            org.bouncycastle.math.ec.rfc7748.X25519.generatePublicKey(this.s_priv, 0, this.s_pub, 0);
            initialize();
        }

        private void initialize() {
            byte[] protocolName = "Noise_XX_25519_ChaChaPoly_BLAKE2s".getBytes(StandardCharsets.UTF_8);
            h = blake2s(protocolName);
            System.arraycopy(h, 0, ck, 0, 32);
            mixHash("kisama_terminal_v1".getBytes(StandardCharsets.UTF_8));
        }

        private byte[] blake2s(byte[]... inputs) {
            org.bouncycastle.crypto.digests.Blake2sDigest digest = new org.bouncycastle.crypto.digests.Blake2sDigest();
            for (byte[] input : inputs) {
                digest.update(input, 0, input.length);
            }
            byte[] out = new byte[digest.getDigestSize()];
            digest.doFinal(out, 0);
            return out;
        }

        private byte[] hmacBlake2s(byte[] key, byte[]... datas) {
            org.bouncycastle.crypto.macs.HMac hmac = new org.bouncycastle.crypto.macs.HMac(new org.bouncycastle.crypto.digests.Blake2sDigest());
            hmac.init(new org.bouncycastle.crypto.params.KeyParameter(key));
            for (byte[] data : datas) {
                hmac.update(data, 0, data.length);
            }
            byte[] out = new byte[hmac.getMacSize()];
            hmac.doFinal(out, 0);
            return out;
        }

        void mixHash(byte[] data) {
            h = blake2s(h, data);
        }

        void mixKey(byte[] ikm) {
            byte[] prk = hmacBlake2s(ck, ikm);
            ck = hmacBlake2s(prk, new byte[]{1});
            byte[] tempK = hmacBlake2s(prk, ck, new byte[]{2});
            System.arraycopy(tempK, 0, k_handshake, 0, 32);
            n_handshake = 0;
            hasKey = true;
        }

        byte[] dh(byte[] privateKey, byte[] publicKey) {
            byte[] shared = new byte[32];
            org.bouncycastle.math.ec.rfc7748.X25519.scalarMult(privateKey, 0, publicKey, 0, shared, 0);
            return shared;
        }

        byte[] encryptHandshake(byte[] plaintext) {
            byte[] res = hasKey ? chacha20Poly1305(true, k_handshake, n_handshake++, h, plaintext) : plaintext;
            mixHash(res);
            return res;
        }

        byte[] decryptHandshake(byte[] ciphertext) {
            byte[] res = hasKey ? chacha20Poly1305(false, k_handshake, n_handshake++, h, ciphertext) : ciphertext;
            mixHash(ciphertext);
            return res;
        }

        public byte[] encryptTransport(byte[] plaintext) {
            return chacha20Poly1305(true, k_send, n_send++, new byte[0], plaintext);
        }

        public byte[] decryptTransport(byte[] ciphertext) {
            return chacha20Poly1305(false, k_recv, n_recv++, new byte[0], ciphertext);
        }

        private byte[] chacha20Poly1305(boolean isEncrypt, byte[] key, long nonceVal, byte[] ad, byte[] input) {
            try {
                byte[] iv = new byte[12];
                for (int i = 0; i < 8; i++) iv[4 + i] = (byte) ((nonceVal >> (i * 8)) & 0xFF);
                org.bouncycastle.crypto.modes.ChaCha20Poly1305 aead = new org.bouncycastle.crypto.modes.ChaCha20Poly1305();
                aead.init(isEncrypt, new org.bouncycastle.crypto.params.ParametersWithIV(new org.bouncycastle.crypto.params.KeyParameter(key), iv));
                aead.processAADBytes(ad, 0, ad.length);
                byte[] out = new byte[aead.getOutputSize(input.length)];
                int len = aead.processBytes(input, 0, input.length, out, 0);
                aead.doFinal(out, len);
                return out;
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }

        public void readMsg1(byte[] msg1) {
            if (msg1.length < 32) throw new IllegalArgumentException("Msg1 握手断片不足 32 字节");
            System.arraycopy(msg1, 0, re, 0, 32);
            mixHash(re);
            byte[] payloadCipher = new byte[msg1.length - 32];
            System.arraycopy(msg1, 32, payloadCipher, 0, payloadCipher.length);
            decryptHandshake(payloadCipher);
        }

        public byte[] writeMsg2() {
            SecureRandom rand = new SecureRandom();
            org.bouncycastle.math.ec.rfc7748.X25519.generatePrivateKey(rand, e_priv);
            org.bouncycastle.math.ec.rfc7748.X25519.generatePublicKey(e_priv, 0, e_pub, 0);
            mixHash(e_pub);
            mixKey(dh(e_priv, re));
            byte[] encS = encryptHandshake(s_pub);
            mixKey(dh(s_priv, re));
            byte[] encPayload = encryptHandshake(new byte[0]);
            byte[] msg2 = new byte[32 + encS.length + encPayload.length];
            System.arraycopy(e_pub, 0, msg2, 0, 32);
            System.arraycopy(encS, 0, msg2, 32, encS.length);
            System.arraycopy(encPayload, 0, msg2, 32 + encS.length, encPayload.length);
            return msg2;
        }

        public void readMsg3(byte[] msg3) {
            if (msg3.length < 64) throw new IllegalArgumentException("Msg3 载荷混淆损坏，长度必须 >= 64");
            byte[] encS = new byte[48];
            System.arraycopy(msg3, 0, encS, 0, 48);
            byte[] decryptedS = decryptHandshake(encS);
            System.arraycopy(decryptedS, 0, rs, 0, 32);
            mixKey(dh(e_priv, rs));
            byte[] encPayload = new byte[msg3.length - 48];
            System.arraycopy(msg3, 48, encPayload, 0, encPayload.length);
            decryptHandshake(encPayload);
            byte[] prk = hmacBlake2s(ck, new byte[0]);
            byte[] tempK1 = hmacBlake2s(prk, new byte[]{1});
            byte[] tempK2 = hmacBlake2s(prk, tempK1, new byte[]{2});
            System.arraycopy(tempK2, 0, k_send, 0, 32);
            System.arraycopy(tempK1, 0, k_recv, 0, 32);
            n_send = 0;
            n_recv = 0;
        }
    }
}