import { When, Then } from "@cucumber/cucumber";
import type { DataTable } from "@cucumber/cucumber";
import assert from "node:assert";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { projectRoot } from "../../support/config";

When("查看 {string}", function (file: string) {
  this.fileContent = fs.readFileSync(path.join(projectRoot, file), "utf-8");
});

Then("包含以下环境变量:", function (dataTable: DataTable) {
  const vars = dataTable.rows().map((row: string[]) => row[0]);
  for (const v of vars) {
    assert.ok(
      (this.fileContent as string).includes(v),
      `环境变量 "${v}" 未在文件中找到`
    );
  }
});

When("检查 {string} 中的变量名", function (file: string) {
  this.fileContent = fs.readFileSync(path.join(projectRoot, file), "utf-8");
});

Then("无任何变量以 {string} 开头", function (prefix: string) {
  const lines = (this.fileContent as string)
    .split("\n")
    .filter((l) => !l.startsWith("#") && l.trim());
  const violating = lines.filter((l) => l.startsWith(prefix));
  assert.strictEqual(
    violating.length,
    0,
    `发现以 ${prefix} 开头的变量: ${violating.join(", ")}`
  );
});

When("创建临时文件 {string} 并检查 Git 追踪状态", function (file: string) {
  const filePath = path.join(projectRoot, file);
  fs.writeFileSync(filePath, "# test\n");
  try {
    this.gitStatusOutput = execSync("git status --porcelain", {
      cwd: projectRoot,
      encoding: "utf-8",
    });
  } finally {
    fs.unlinkSync(filePath);
  }
});

Then("{string} 不出现在未追踪文件列表中", function (file: string) {
  assert.ok(
    !(this.gitStatusOutput as string).includes(file),
    `${file} 出现在 git status 输出中`
  );
});
