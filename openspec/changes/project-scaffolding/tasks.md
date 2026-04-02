## 1. Next.js 项目初始化

- [x] 1.1 使用 `create-next-app` 初始化项目（TypeScript、Tailwind CSS、App Router、pnpm、`@/` 别名）
- [x] 1.2 清理脚手架默认内容，精简 `app/page.tsx` 为占位页面（显示"单词本"）、精简 `app/layout.tsx`（设置 `lang="zh-CN"`、标题"单词本"）、精简 `globals.css`

## 2. shadcn/ui 初始化

- [x] 2.1 执行 `pnpm dlx shadcn@latest init` 初始化 shadcn/ui（New York 风格），确认 `components.json` 和 `lib/utils.ts` 生成

## 3. 目录结构建立

- [x] 3.1 创建 `features/.gitkeep`、`db/` 目录，确认 `app/`、`components/ui/`、`lib/` 已由前置步骤生成

## 4. 数据库基础配置

- [x] 4.1 安装 `drizzle-orm`、`better-sqlite3` 及类型包，安装 `drizzle-kit` 为开发依赖
- [x] 4.2 创建 `drizzle.config.ts`，配置 schema 路径和 SQLite dialect
- [x] 4.3 创建 `db/schema.ts`（空 schema 起点）和 `db/index.ts`（数据库连接实例）
- [x] 4.4 在 `package.json` 中添加 `db:generate` 和 `db:migrate` 脚本

## 5. 环境变量配置

- [x] 5.1 创建 `.env.example`，包含 `YUNWU_API_KEY`、`YUNWU_BASE_URL`、`YUNWU_MODEL`、`MW_DICTIONARY_KEY`、`MW_THESAURUS_KEY`（附注释）
- [x] 5.2 确认 `.gitignore` 已包含 `.env` / `.env.*` 排除规则

## 6. 测试框架配置

- [x] 6.1 安装 Vitest 及相关依赖，创建 `vitest.config.ts`，在 `package.json` 中添加 `test` 脚本
- [x] 6.2 安装 Cucumber.js + Playwright 及相关依赖（`@cucumber/cucumber`、`@playwright/test`、`ts-node`），创建 `cucumber.js` 配置文件，在 `package.json` 中添加 `test:e2e` 脚本

## 7. 验收测试：app-shell

- [x] 7.1 编写 `features/app-shell/steps/app-shell.steps.ts`（首页访问、HTML 属性、目录结构验证）
- [x] 7.2 运行 Cucumber 验收测试通过 `app-shell.feature`

## 8. 验收测试：database-foundation

- [x] 8.1 编写 `features/database-foundation/steps/database-foundation.steps.ts`（数据库连接、drizzle-kit 命令、schema 导入）
- [x] 8.2 运行 Cucumber 验收测试通过 `database-foundation.feature`

## 9. 验收测试：dev-toolchain

- [x] 9.1 编写 `features/dev-toolchain/steps/dev-toolchain.steps.ts`（lint、vitest、cucumber、脚本命令验证）
- [x] 9.2 运行 Cucumber 验收测试通过 `dev-toolchain.feature`

## 10. 验收测试：env-config

- [x] 10.1 编写 `features/env-config/steps/env-config.steps.ts`（环境变量模板、安全性、gitignore 验证）
- [x] 10.2 运行 Cucumber 验收测试通过 `env-config.feature`

## 11. 最终验证

- [x] 11.1 运行 `pnpm dev` 确认开发服务器启动，首页可访问
- [x] 11.2 运行 `pnpm build` 确认项目可构建
- [x] 11.3 运行 `pnpm lint` 确认 ESLint 正常
- [x] 11.4 运行 `pnpm test:e2e` 确认所有 Cucumber 验收测试通过
