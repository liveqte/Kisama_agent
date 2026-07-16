'use strict';

const path = require('path');
const { spawn } = require('child_process');

const libPath = path.resolve(__dirname, '../../go/libkisama.so');
const ecdsaPub = 'Ai3VxtqO20kkcuP7Ba28fULmQo46Ef1LrGixu+GiorL5';
const eciesPub = 'A1pf0NNQQYeYc9RLrExjLpY6WNn/T/D63TOh3CDrHxpD';
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '8000';

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function probeHealth(url, timeoutMs = 10000) {
  const http = require('http');
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await new Promise((resolve, reject) => {
        const req = http.get(url, (res) => {
          let data = '';
          res.on('data', (chunk) => { data += chunk; });
          res.on('end', () => resolve({ statusCode: res.statusCode, data }));
        });
        req.on('error', reject);
      });

      if (response.statusCode === 200) {
        return response.data;
      }
    } catch (err) {
      // Ignore transient startup errors and retry.
    }

    await wait(250);
  }

  throw new Error(`health check timed out for ${url}`);
}

async function main() {
  console.log('Using provided ECDSA public key length:', ecdsaPub.length);
  console.log('Using provided ECIES public key length:', eciesPub.length);

  const child = spawn(process.execPath, ['-e', `
    const koffi = require('koffi');
    const lib = koffi.load(${JSON.stringify(libPath)});
    const startServer = lib.func('StartServer', 'int32', ['string', 'string', 'string', 'string']);
    startServer(${JSON.stringify(host)}, ${JSON.stringify(String(port))}, ${JSON.stringify(ecdsaPub)}, ${JSON.stringify(eciesPub)});
  `], {
    stdio: 'inherit',
    env: {
      ...process.env,
      ECDSA_PUBKEY: ecdsaPub,
      ECIES_PUBKEY: eciesPub,
      DEBUG: 'true',
      HOST: host,
      PORT: String(port),
    },
  });

  child.on('error', (err) => {
    console.error('child process failed:', err.message);
    process.exit(1);
  });

  const healthUrl = `http://${host}:${port}/health`;
  console.log(`Waiting for ${healthUrl} (timeout: 10s)`);

  try {
    const healthResponse = await probeHealth(healthUrl, 10000);
    console.log('Health check response:', healthResponse);
  } finally {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }

  process.exit(0);
}

main().catch((err) => {
  console.error('loadso.js failed:', err.message);
  process.exit(1);
});
