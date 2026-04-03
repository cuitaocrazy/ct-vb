## 1. Next.js 项目初始化

- [x] 1.1 使用 `create-next-app` 初始化项目（TypeScript, App Router, Tailwind CSS, ESLint, `src/` 目录）
- [x] 1.2 创建项目目录结构：`src/components/`、`src/lib/`、`src/services/`
- [ ] 1.3 安装并初始化 shadcn/ui 组件库
- [ ] 1.4 验证 `pnpm dev` 启动成功、`pnpm build` 构建通过

## 2. ESLint 配置

- [ ] 2.1 确认 ESLint flat config（`eslint.config.mjs`）已生成，配合 `@eslint/js` 和 `typescript-eslint`
- [ ] 2.2 验证 `pnpm lint` 通过

## 3. 数据库基础设施

- [ ] 3.1 安装 `drizzle-orm`、`better-sqlite3`、`drizzle-kit` 及类型定义
- [ ] 3.2 创建 `drizzle.config.ts` 配置文件
- [ ] 3.3 创建 `src/lib/db.ts` 数据库客户端（Drizzle + SQLite）
- [ ] 3.4 创建空的 `src/lib/schema.ts` schema 文件（预留，暂无表定义）
- [ ] 3.5 在 `.gitignore` 中添加 `data/` 目录
- [ ] 3.6 在 `package.json` 中添加 `db:push` 脚本
- [ ] 3.7 验证 `pnpm db:push` 执行成功

## 4. Vitest 测试框架

- [ ] 4.1 安装 Vitest 及相关依赖
- [ ] 4.2 创建 `vitest.config.ts` 配置文件
- [ ] 4.3 在 `package.json` 中配置 `test` 脚本
- [ ] 4.4 验证 `pnpm test` 正常运行（无测试文件时正常退出）

## 5. Playwright + Cucumber BDD 测试框架

- [ ] 5.1 安装 Playwright、@cucumber/cucumber 及相关依赖
- [ ] 5.2 创建 `playwright.config.ts` 配置文件
- [ ] 5.3 创建 Cucumber 配置及 step definitions 目录结构（`features/`、`features/support/`）
- [ ] 5.4 在 `package.json` 中配置 `test:bdd` 脚本
- [ ] 5.5 运行 Cucumber 生成 step definition snippets
- [ ] 5.6 验证 `pnpm test:bdd` 基本流程可运行
