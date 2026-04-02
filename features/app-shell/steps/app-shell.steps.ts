import { When, Then, After } from "@cucumber/cucumber";
import type { DataTable } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { projectRoot, baseUrl } from "../../support/config";

interface BrowserWorld {
  browser: Browser | null;
  page: Page | null;
  projectRoot: string;
}

async function ensureBrowser(world: BrowserWorld): Promise<Page> {
  if (!world.browser) {
    world.browser = await chromium.launch();
    world.page = await world.browser.newPage();
  }
  return world.page!;
}

After({ tags: "@browser" }, async function (this: BrowserWorld) {
  if (this.browser) {
    await this.browser.close();
    this.browser = null;
    this.page = null;
  }
});

When("访问 {string}", async function (this: BrowserWorld, url: string) {
  try {
    await fetch(baseUrl);
  } catch {
    throw new Error(`Dev server 未启动 (${baseUrl})，请先运行 pnpm dev`);
  }
  const page = await ensureBrowser(this);
  await page.goto(`${baseUrl}${url}`, { timeout: 10_000 });
});

Then("页面显示 {string}", async function (this: BrowserWorld, text: string) {
  assert.ok(this.page, "浏览器页面未初始化");
  const content = await this.page.textContent("body");
  assert.ok(content?.includes(text), `页面未包含文字 "${text}"`);
});

Then(
  "HTML 元素的 {string} 属性为 {string}",
  async function (this: BrowserWorld, attr: string, value: string) {
    assert.ok(this.page, "浏览器页面未初始化");
    const actual = await this.page.getAttribute("html", attr);
    assert.strictEqual(actual, value);
  }
);

Then(
  "页面标题为 {string}",
  async function (this: BrowserWorld, title: string) {
    assert.ok(this.page, "浏览器页面未初始化");
    const actual = await this.page.title();
    assert.strictEqual(actual, title);
  }
);

When("检查项目目录结构", function (this: BrowserWorld) {
  this.projectRoot = projectRoot;
});

Then("以下目录均存在:", function (this: BrowserWorld, dataTable: DataTable) {
  const root = this.projectRoot || projectRoot;
  const dirs = dataTable.rows().map((row) => row[0]);
  for (const dir of dirs) {
    const fullPath = path.join(root, dir);
    assert.ok(fs.existsSync(fullPath), `目录不存在: ${dir}`);
  }
});
