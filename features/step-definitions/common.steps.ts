import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

const BASE_URL = "http://localhost:3000";

Given("开发服务器已启动", async function (this: CustomWorld) {
  // Server is started by start-server-and-test
  // Just verify it's reachable
  const response = await this.page.goto(BASE_URL);
  expect(response?.status()).toBeLessThan(500);
});

When("在浏览器中打开首页", async function (this: CustomWorld) {
  await this.page.goto(BASE_URL);
});

Then("页面成功渲染，无控制台错误", async function (this: CustomWorld) {
  const errors: string[] = [];
  this.page.on("pageerror", (err) => errors.push(err.message));
  await this.page.reload();
  await this.page.waitForLoadState("domcontentloaded");
  expect(errors).toHaveLength(0);
});
