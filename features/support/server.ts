import {
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { execSync, spawn, ChildProcess } from "node:child_process";
import fs from "node:fs";
import { projectRoot, testPort, baseUrl, testDbPath } from "./config";

setDefaultTimeout(30_000);

// Set test database path for all steps
process.env.DATABASE_PATH = testDbPath;

let serverProcess: ChildProcess | null = null;
let weStartedServer = false;

BeforeAll({ timeout: 30_000 }, async function () {
  // If server already running, reuse it
  try {
    const res = await fetch(baseUrl);
    if (res.ok) return;
  } catch {
    // not running, start it
  }

  // Kill stale processes on port
  try {
    execSync(`lsof -ti :${testPort} | xargs kill`, { stdio: "ignore" });
  } catch {
    // no process on port
  }

  serverProcess = spawn("pnpm", ["next", "dev", "-p", testPort], {
    cwd: projectRoot,
    stdio: "ignore",
    detached: true,
    env: { ...process.env, DATABASE_PATH: testDbPath },
  });
  weStartedServer = true;

  const maxWait = 25_000;
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    try {
      const res = await fetch(baseUrl);
      if (res.ok) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Dev server failed to start within 25s on port ${testPort}`);
});

AfterAll({ timeout: 10_000 }, async function () {
  if (serverProcess && weStartedServer) {
    if (serverProcess.pid) {
      try {
        process.kill(-serverProcess.pid, "SIGTERM");
      } catch {
        // Process already exited
      }
    }
    await new Promise((r) => setTimeout(r, 2000));
    if (serverProcess.pid) {
      try {
        process.kill(-serverProcess.pid, "SIGKILL");
      } catch {
        // Process already exited
      }
    }
    serverProcess = null;
  }

  // Clean up test database
  try {
    fs.unlinkSync(testDbPath);
  } catch {
    // file may not exist
  }
});
