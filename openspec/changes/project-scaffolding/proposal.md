## Why

项目目前仅有 OpenSpec 配置和 `.gitignore`，尚无任何可运行代码。需要搭建完整的项目骨架，使后续功能开发（单词管理、词典查询、复习系统等）有统一的技术基础和目录约定可依赖。

## What Changes

- 初始化 Next.js 项目（App Router, TypeScript, Tailwind CSS）
- 安装并配置 shadcn/ui 组件库
- 配置 Drizzle ORM + SQLite，建立数据库连接和迁移机制
- 建立按功能模块组织的目录结构（`features/`、`components/`、`db/`、`lib/`）
- 配置开发工具链：ESLint、Vitest、Cucumber.js + Playwright
- 创建 `.env.example` 环境变量模板，包含外部 API 密钥占位
- 搭建首页占位页面，验证整体流程可运行

## Capabilities

### New Capabilities

- `app-shell`: 应用外壳——Next.js App Router 根布局、全局样式、首页占位页面、按功能模块组织的目录结构
- `database-foundation`: 数据库基础——Drizzle ORM 连接配置、SQLite 初始化、迁移机制
- `dev-toolchain`: 开发工具链——ESLint、Vitest、Cucumber.js + Playwright 基础配置及脚本命令
- `env-config`: 环境变量配置——`.env.example` 模板，包含 yunwu.ai 和 Merriam-Webster API 密钥占位

### Modified Capabilities

（无，项目从零开始）

## Impact

- **新增依赖**：next、react、tailwindcss、shadcn/ui、drizzle-orm、better-sqlite3、vitest、@cucumber/cucumber、@playwright/test、eslint 等
- **包管理器**：使用 pnpm
- **目录结构**：建立 `app/`、`features/`、`components/`、`db/`、`lib/` 等顶层目录
- **配置文件**：`drizzle.config.ts`、`vitest.config.ts`、`cucumber.js`、`.env.example`
