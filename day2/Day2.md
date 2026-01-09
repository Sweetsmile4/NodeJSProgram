# Node.js Built-in (Internal) Modules

Node.js ships with core modules (no install needed) accessible via `require()` or ESM `import`. These provide file I/O, networking, crypto, compression, and more.

---

## 📚 Core Modules (Built-in)
| Module            | Purpose                                                                     |
|-------------------|------------------------------------------------------------------------------|
| `assert`          | Assertion testing utilities                                                  |
| `async_hooks`     | Track async resource lifecycle                                               |
| `buffer`          | Work with binary data                                                        |
| `child_process`   | Spawn and manage child processes                                             |
| `cluster`         | Run multiple worker processes for load balancing                             |
| `crypto`          | Cryptography (hash, HMAC, cipher, etc.)                                      |
| `dgram`           | UDP datagram sockets                                                         |
| `dns`             | DNS lookups and name resolution                                              |
| `domain` ⚠️       | Deprecated error handling                                                    |
| `events`          | Event-driven programming with `EventEmitter`                                |
| `fs` / `fs/promises` | File system operations (sync, async, and promises API)                   |
| `http`            | HTTP servers and clients                                                     |
| `http2`           | HTTP/2 support                                                               |
| `https`           | Secure HTTP (TLS/SSL)                                                        |
| `inspector`       | V8 inspector/debug protocol                                                  |
| `module`          | Module loading internals                                                     |
| `net`             | TCP servers and clients                                                      |
| `os`              | System information (CPU, memory, platform, etc.)                             |
| `path`            | File and directory path utilities                                            |
| `perf_hooks`      | Performance measurements                                                     |
| `process`         | Process info, env, argv, exit codes, signals                                 |
| `punycode` ⚠️     | Deprecated URL punycode support                                              |
| `querystring` ⚠️  | Legacy URL query parsing (prefer `URLSearchParams`)                          |
| `readline`        | Read from standard input/output                                              |
| `repl`            | Read–eval–print loop for interactive use                                     |
| `stream`          | Streaming interfaces (readable, writable, transform, duplex)                 |
| `string_decoder`  | Decode buffers into strings                                                  |
| `timers`          | Scheduling (`setTimeout`, `setInterval`, `setImmediate`)                     |
| `tls`             | TLS/SSL wrapper over `net`                                                   |
| `trace_events`    | Trace event diagnostics                                                      |
| `tty`             | TTY stream utilities                                                         |
| `url`             | URL parsing/formatting (`URL`, `URLSearchParams`)                            |
| `util`            | Utilities (promisify, callbackify, formatting, debugging)                    |
| `v8`              | V8 engine utilities                                                          |
| `vm`              | Run code in V8 virtual machines/contexts                                     |
| `worker_threads`  | Lightweight threads for CPU-bound work                                       |
| `zlib`            | Compression/decompression (gzip, deflate, brotli)                            |

---

## ⚙️ Usage (CommonJS & ESM)
```javascript
// CommonJS
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello Node.js!');

// ESM
import fs from 'node:fs';
await fs.promises.writeFile('test.txt', 'Hello Node.js!');
```

---

## 🚨 Notes & Deprecated APIs
- Prefer modern modules over deprecated ones (`domain`, `punycode`, `querystring`).
- Use promise-based APIs (`fs/promises`) or `util.promisify` for async flows.
- For CPU-bound tasks, consider `worker_threads` or offloading to services.

---

## 🔍 More Info
- Docs: https://nodejs.org/api/
- Migration to ESM: use `type: "module"` in `package.json` or `.mjs` extensions.
