import { When, Then } from "@cucumber/cucumber";
import assert from "node:assert";
import { projectRoot } from "../../support/config";
import path from "node:path";

When("导入数据库实例并执行查询", async function () {
  const { db } = await import(path.join(projectRoot, "db/index.ts"));
  const { sql } = await import("drizzle-orm");
  const result = db.get(sql`SELECT 1 AS value`) as { value: number } | undefined;
  this.queryResult = result;
});

Then("查询返回成功结果", function () {
  assert.ok(this.queryResult !== undefined, "查询未返回结果");
  assert.strictEqual(this.queryResult.value, 1, "查询返回值不正确");
});

When("动态导入 Schema 模块", async function () {
  const schemaModule = await import(path.join(projectRoot, "db/schema.ts"));
  this.schemaModule = schemaModule;
});

Then("模块正常加载无运行时错误", function () {
  assert.ok(this.schemaModule !== undefined, "Schema 模块加载失败");
});

When("动态导入 Drizzle 配置", async function () {
  const configModule = await import(
    path.join(projectRoot, "drizzle.config.ts")
  );
  this.drizzleConfig = configModule.default;
});

Then("配置包含有效的 schema 和 dialect 字段", function () {
  const config = this.drizzleConfig;
  assert.ok(config, "Drizzle 配置未导出 default");
  assert.ok(
    typeof config.schema === "string" && config.schema.length > 0,
    `schema 字段无效: ${config.schema}`
  );
  assert.ok(
    typeof config.dialect === "string" && config.dialect.length > 0,
    `dialect 字段无效: ${config.dialect}`
  );
});
