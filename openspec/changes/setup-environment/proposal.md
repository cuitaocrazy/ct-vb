## Why

项目刚刚初始化，尚未搭建任何开发基础设施。需要完成 Next.js 项目脚手架、数据库 schema、开发工具链（ESLint、Vitest、Playwright）等基础搭建，为后续功能开发提供可运行的开发环境。

## What Changes

- 初始化 Next.js 项目（App Router, TypeScript, Tailwind CSS）
- 安装并配置 shadcn/ui 组件库
- 配置 Drizzle ORM + SQLite 数据库连接
- 配置 ESLint 代码规范
- 配置 Vitest 单元/集成测试框架
- 配置 Playwright E2E 测试框架及 Cucumber BDD 集成
- 创建基础项目目录结构（app/, lib/, components/ 等）
- 添加 pnpm scripts（dev, build, lint, test, test:bdd）

## Capabilities

### New Capabilities

- `dev-environment`: 开发环境搭建，包括项目脚手架、构建工具、代码规范和基础目录结构
- `database-setup`: 数据库基础设施，包括 Drizzle ORM 配置、SQLite 连接和迁移机制
- `testing-setup`: 测试框架配置，包括 Vitest 单元测试和 Playwright + Cucumber BDD 验收测试

### Modified Capabilities

（无，这是全新项目）

## Impact

- 新增项目依赖：next, react, tailwindcss, shadcn/ui, drizzle-orm, better-sqlite3, vitest, playwright, @cucumber/cucumber 等
- 生成配置文件：next.config.ts, drizzle.config.ts, vitest.config.ts, playwright.config.ts, eslint.config.js, tailwind.config.ts 等
- 建立基础目录结构：src/app/, src/lib/, src/components/, tests/, features/
