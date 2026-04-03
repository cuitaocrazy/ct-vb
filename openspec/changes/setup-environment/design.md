## Context

这是一个全新的个人单词本项目，目前仓库中只有 openspec 配置和 CLAUDE.md，尚无任何代码或配置文件。需要从零搭建完整的开发环境，使后续功能开发能够立即开始。

## Goals / Non-Goals

**Goals:**
- 搭建可运行的 Next.js 开发环境，`pnpm dev` 即可启动
- 配置好所有工具链（ESLint, Vitest, Playwright + Cucumber），`pnpm lint/test/test:bdd` 可用
- 建立 Drizzle ORM + SQLite 数据库基础设施，包含迁移机制
- 确立项目目录结构约定

**Non-Goals:**
- 不实现任何业务功能（单词管理、学习等）
- 不配置 CI/CD 流水线
- 不接入外部 API（Merriam-Webster、AI 等）
- 不设计 UI 页面或组件

## Decisions

### 1. 项目结构采用 `src/` 目录

```
src/
  app/           # Next.js App Router 页面
  components/    # UI 组件（shadcn/ui + 自定义）
  lib/           # 工具函数、数据库客户端
  services/      # service 层，封装数据库操作和外部 API
```

**理由**：`src/` 目录是 Next.js 推荐的项目组织方式，将应用代码与配置文件分离，结构更清晰。service 层遵循设计规则，Server Components 不直接访问数据源。

### 2. SQLite 数据库文件放在项目根目录 `data/`

数据库文件路径：`data/vocabulary.db`，通过环境变量 `DATABASE_URL` 配置。

**理由**：个人本地应用，SQLite 够用且零运维。`data/` 目录加入 `.gitignore`，避免数据库文件入库。

### 3. Drizzle ORM 迁移策略采用 `drizzle-kit push`

开发阶段使用 `drizzle-kit push` 直接同步 schema 到数据库，不生成 SQL 迁移文件。

**理由**：个人项目、单用户、本地使用，无需团队协作的迁移管理。`push` 模式最简单直接。后续如需迁移文件可随时切换到 `drizzle-kit generate`。

**备选方案**：`drizzle-kit generate` + `drizzle-kit migrate` — 更适合多人协作，但对本项目过重。

### 4. 测试框架分层

| 层级 | 工具 | 用途 |
|------|------|------|
| 单元/集成 | Vitest | service 层、工具函数 |
| E2E / BDD | Playwright + Cucumber | 用户场景验收测试 |

**理由**：Vitest 与 Next.js 生态兼容好、速度快。Playwright + Cucumber 支持 BDD 风格的验收测试，与 openspec 的 feature 文件衔接。

### 5. ESLint 使用 flat config 格式

采用 `eslint.config.mjs` flat config，配合 `@eslint/js` 和 `typescript-eslint`。

**理由**：flat config 是 ESLint v9+ 的推荐格式，`.eslintrc` 已被废弃。

## Risks / Trade-offs

- **SQLite 并发限制** → 个人单用户场景无影响，如未来需要多端同步再考虑迁移到 PostgreSQL
- **`drizzle-kit push` 可能丢数据** → 开发阶段数据不重要，正式使用后可切换到迁移文件模式
- **Cucumber + Playwright 集成复杂度** → 需要额外的 glue code 配置，但这是一次性成本
