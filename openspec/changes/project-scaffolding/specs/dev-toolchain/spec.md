## ADDED Requirements

### Requirement: ESLint 配置
项目 SHALL 配置 ESLint，使用 Next.js 推荐的规则集。

#### Scenario: Lint 检查可运行
- **WHEN** 执行 `pnpm lint`
- **THEN** ESLint 对项目代码执行检查，无配置错误

### Requirement: Vitest 配置
项目 SHALL 配置 Vitest 用于单元测试和集成测试，支持 TypeScript 和 JSX，配置 `@/` 路径别名。

#### Scenario: 单元测试可运行
- **WHEN** 执行 `pnpm test`
- **THEN** Vitest 启动并执行测试（无测试文件时正常退出）

### Requirement: Cucumber.js + Playwright 配置
项目 SHALL 配置 Cucumber.js 用于 E2E 验收测试，使用 Playwright 驱动浏览器。`.feature` 文件位于 `openspec/specs/**/*.feature`，step definitions 位于 `features/**/steps/*.steps.ts`。仅启用 Chromium。

#### Scenario: Cucumber 验收测试可运行
- **WHEN** 执行 `pnpm test:e2e`
- **THEN** Cucumber.js 启动并扫描 `.feature` 文件（无匹配的 step definitions 时提示 pending）

### Requirement: 脚本命令
`package.json` SHALL 包含以下脚本命令：`dev`、`build`、`lint`、`test`（Vitest）、`test:e2e`（Cucumber）、`db:generate`（drizzle-kit generate）、`db:migrate`（drizzle-kit migrate）。

#### Scenario: 所有脚本命令已定义
- **WHEN** 检查 `package.json` 的 `scripts` 字段
- **THEN** 包含 `dev`、`build`、`lint`、`test`、`test:e2e`、`db:generate`、`db:migrate` 命令
