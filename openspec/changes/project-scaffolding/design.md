## Context

项目 ct-vb 是一个个人单词本应用，目前仅有 OpenSpec 配置，无可运行代码。本次变更搭建完整的技术骨架。

技术栈已确定：Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Drizzle ORM + SQLite。外部服务已验证连通：yunwu.ai（OpenAI 兼容 API，gpt-4o-mini）和 Merriam-Webster Dictionary/Thesaurus API。

测试策略采用 BDD 验收驱动：OpenSpec specs 中的场景同步生成 `.feature` 文件，由 Cucumber.js + Playwright 执行验收测试。

## Goals / Non-Goals

**Goals:**

- `pnpm dev` 可启动，浏览器可访问首页
- 按功能模块组织的目录结构就绪
- Drizzle ORM + SQLite 连接可用，迁移机制就绪
- ESLint、Vitest、Cucumber.js + Playwright 配置就绪
- 环境变量模板包含所有外部 API 密钥占位

**Non-Goals:**

- 不实现任何业务功能（单词 CRUD、查词、复习等）
- 不定义业务数据表，仅验证 Drizzle 连接
- 不实现 UI 组件或页面布局，仅保留最小占位页面
- 不配置 CI/CD 或部署流程

## Decisions

### 1. 目录结构：按功能模块组织

```
ct-vb/
├── app/                      # Next.js App Router（路由 + 页面壳子）
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── features/                 # 功能模块（预留，本次不填充）
│   └── .gitkeep
├── components/               # 全局共享组件
│   └── ui/                   # shadcn/ui 组件
├── db/                       # 数据库层
│   ├── index.ts              # 数据库连接
│   └── schema.ts             # Drizzle schema 入口
├── lib/                      # 通用工具
│   └── utils.ts              # cn() 等
└── drizzle.config.ts
```

**为什么 `db/` 独立：** 多个功能模块共享 schema，独立的 `db/` 层避免循环依赖。

**为什么 `features/` 仅创建空目录：** 业务模块结构随功能开发自然生长，避免过度设计。

### 2. 数据库：better-sqlite3 + Drizzle ORM

选择 `better-sqlite3`（同步 API，性能好，Drizzle 官方推荐）。数据库文件使用 Drizzle 默认路径。

Schema 约定：表名 snake_case，字段名 camelCase。

### 3. 环境变量

使用 Next.js 内置 `.env.local` 机制。API 密钥不加 `NEXT_PUBLIC_` 前缀，仅服务端可用。

```
YUNWU_API_KEY=
YUNWU_BASE_URL=https://yunwu.ai/v1
YUNWU_MODEL=gpt-4o-mini
MW_DICTIONARY_KEY=
MW_THESAURUS_KEY=
```

### 4. 测试架构：三层分工

| 层级 | 工具 | 职责 |
|------|------|------|
| 单元/集成 | Vitest | 函数、service、组件级测试 |
| E2E 验收 | Cucumber.js + Playwright | 基于 `.feature` 文件的行为验收 |

Cucumber 配置：
- `.feature` 文件位于 `openspec/specs/<capability>/`（与 spec.md 同目录）
- step definitions 位于 `features/<capability>/steps/`（与业务代码同目录）
- Cucumber 配置文件 `cucumber.js` 指向以上两个路径

### 5. shadcn/ui

使用 `pnpm dlx shadcn@latest init` 初始化（New York 风格）。本次不预装具体组件，按需添加。

## Risks / Trade-offs

- **better-sqlite3 需要 native 编译** → Manjaro Linux 通常已具备编译环境，问题概率低。若失败可切换到 `sql.js`。
- **Cucumber.js 配置比纯 Playwright 复杂** → 换来的是 specs 与测试的天然对齐，长期维护成本更低。
- **框架搭建无业务代码，难以验证端到端** → 通过数据库连接测试 + 首页渲染 + Cucumber 空跑确认各工具链可用。
