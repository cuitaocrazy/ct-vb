## ADDED Requirements

### Requirement: Vitest 单元测试框架可用

系统 SHALL 提供 `pnpm test` 命令，使用 Vitest 运行单元和集成测试。

#### Scenario: 执行单元测试

- **WHEN** 开发者执行 `pnpm test`
- **THEN** Vitest 运行所有 `**/*.test.ts` 文件并输出测试结果

#### Scenario: 无测试文件时正常退出

- **WHEN** 项目中没有测试文件时执行 `pnpm test`
- **THEN** Vitest 正常退出，不报错

### Requirement: Playwright + Cucumber BDD 验收测试框架可用

系统 SHALL 提供 `pnpm test:bdd` 命令，使用 Playwright 和 Cucumber 运行 BDD 风格的验收测试。

#### Scenario: 执行 BDD 验收测试

- **WHEN** 开发者执行 `pnpm test:bdd`
- **THEN** Cucumber 运行 `features/` 目录下的 `.feature` 文件，使用 Playwright 进行浏览器自动化

#### Scenario: Feature 文件格式遵循 Gherkin 语法

- **WHEN** 开发者编写 `.feature` 文件
- **THEN** 文件使用标准 Gherkin 语法（Feature, Scenario, Given, When, Then）

### Requirement: Playwright 浏览器已安装

系统 SHALL 确保 Playwright 所需的浏览器二进制文件已安装。

#### Scenario: 安装 Playwright 浏览器

- **WHEN** 开发者执行 `pnpm exec playwright install`
- **THEN** Chromium 等浏览器二进制文件下载并安装成功
