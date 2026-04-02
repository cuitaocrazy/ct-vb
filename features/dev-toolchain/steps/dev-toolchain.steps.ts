import { When, Then } from "@cucumber/cucumber";
import type { DataTable } from "@cucumber/cucumber";
import assert from "node:assert";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { projectRoot } from "../../support/config";

When("运行 ESLint 检查", function () {
  try {
    this.lintOutput = execSync("pnpm lint", {
      cwd: projectRoot,
      encoding: "utf-8",
      stdio: ["pipe", "pipe", "pipe"],
    });
    this.lintExitCode = 0;
  } catch (e: unknown) {
    const err = e as { stdout?: string; stderr?: string; status?: number };
    this.lintOutput = (err.stdout || "") + (err.stderr || "");
    this.lintExitCode = err.status ?? 1;
  }
});

Then("ESLint 正常通过无错误", function () {
  assert.strictEqual(
    this.lintExitCode,
    0,
    `ESLint 检查失败:\n${this.lintOutput}`
  );
});

When("运行 Vitest 测试", function () {
  try {
    this.testOutput = execSync("pnpm test", {
      cwd: projectRoot,
      encoding: "utf-8",
      stdio: ["pipe", "pipe", "pipe"],
    });
    this.testExitCode = 0;
  } catch (e: unknown) {
    const err = e as { stdout?: string; stderr?: string; status?: number };
    this.testOutput = (err.stdout || "") + (err.stderr || "");
    this.testExitCode = err.status ?? 1;
  }
});

Then("测试正常通过", function () {
  assert.strictEqual(
    this.testExitCode,
    0,
    `Vitest 测试失败:\n${this.testOutput}`
  );
});

When("加载 Cucumber 配置文件", function () {
  const configPath = path.join(projectRoot, "cucumber.js");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const config = require(configPath);
  this.cucumberConfig = config.default;
});

Then("配置包含 paths、require 和 language 字段", function () {
  const config = this.cucumberConfig;
  assert.ok(config, "Cucumber 配置未导出 default");
  assert.ok(
    Array.isArray(config.paths) && config.paths.length > 0,
    "paths 字段缺失或为空"
  );
  assert.ok(
    Array.isArray(config.require) && config.require.length > 0,
    "require 字段缺失或为空"
  );
  assert.ok(
    typeof config.language === "string" && config.language.length > 0,
    "language 字段缺失或为空"
  );
});

When(
  "检查 {string} 的 {string} 字段",
  function (file: string, field: string) {
    const content = fs.readFileSync(path.join(projectRoot, file), "utf-8");
    this.parsedField = JSON.parse(content)[field];
  }
);

Then("包含以下命令:", function (dataTable: DataTable) {
  const expected = dataTable.rows().map((row) => row[0]);
  for (const cmd of expected) {
    assert.ok(
      cmd in this.parsedField,
      `脚本命令 "${cmd}" 未定义在 scripts 中`
    );
  }
});
