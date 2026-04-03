import { When, Then } from "@cucumber/cucumber";
import { existsSync } from "fs";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

const BASE_URL = "http://localhost:3000";

When("访问首页触发数据库初始化", async function (this: CustomWorld) {
  await this.page.goto(BASE_URL);
  await this.page.waitForLoadState("domcontentloaded");
});

Then("data\\/vocabulary.db 文件已创建", function () {
  expect(existsSync("./data/vocabulary.db")).toBe(true);
});
