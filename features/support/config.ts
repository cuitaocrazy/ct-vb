import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const projectRoot = path.resolve(__dirname, "../..");
export const testPort = process.env.TEST_PORT || "3000";
export const baseUrl = `http://localhost:${testPort}`;
export const testDbPath = path.join(projectRoot, "test.db");
