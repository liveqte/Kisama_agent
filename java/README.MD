Kisama Java Agent

Single-file Java agent implementation `kisama.java`.

Build:

```bash
./build.sh
```

Run (after build):

```bash
java -jar target/kisama-agent-java-0.1.0-jar-with-dependencies.jar
```

Notes:
- Configurable via environment variables: `PORT`, `HOST`, `FILE_ROOT`, `DEBUG`.
- `DEBUG=true` (default) returns plaintext JSON to ease testing with `tools/control.py`.
