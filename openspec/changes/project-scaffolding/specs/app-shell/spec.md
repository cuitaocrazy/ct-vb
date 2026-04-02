## ADDED Requirements

### Requirement: Next.js App Router 项目初始化
系统 SHALL 使用 Next.js App Router 模式初始化，启用 TypeScript 和 Tailwind CSS。项目 SHALL 使用 pnpm 作为包管理器。

#### Scenario: 项目启动
- **WHEN** 执行 `pnpm dev`
- **THEN** 开发服务器在 localhost:3000 启动，浏览器可访问首页

### Requirement: 根布局配置
应用 SHALL 提供根布局（`app/layout.tsx`），包含 HTML 语言设置（`zh-CN`）、全局样式引入和基本 metadata。

#### Scenario: 页面渲染包含正确的 HTML 属性
- **WHEN** 访问任意页面
- **THEN** HTML 元素包含 `lang="zh-CN"`，页面标题为"单词本"

### Requirement: 首页占位页面
应用 SHALL 提供一个最小化的首页（`app/page.tsx`），展示应用名称，确认整体渲染流程正常。

#### Scenario: 首页可访问
- **WHEN** 访问 `/`
- **THEN** 页面显示"单词本"字样

### Requirement: shadcn/ui 初始化
项目 SHALL 完成 shadcn/ui 初始化配置（`components.json`），使后续可通过 `pnpm dlx shadcn@latest add <component>` 按需添加组件。

#### Scenario: shadcn/ui 配置就绪
- **WHEN** 执行 `pnpm dlx shadcn@latest add button`
- **THEN** Button 组件被正确安装到 `components/ui/button.tsx`

### Requirement: 按功能模块组织的目录结构
项目 SHALL 建立以下顶层目录：`app/`（路由）、`features/`（功能模块）、`components/`（全局共享组件）、`db/`（数据库层）、`lib/`（通用工具）。

#### Scenario: 目录结构存在
- **WHEN** 检查项目根目录
- **THEN** `app/`、`features/`、`components/ui/`、`db/`、`lib/` 目录均存在

### Requirement: 路径别名配置
项目 SHALL 配置 `@/` 路径别名指向项目根目录，使所有导入可使用 `@/features/...`、`@/db/...` 等形式。

#### Scenario: 路径别名可用
- **WHEN** 在代码中使用 `import { cn } from "@/lib/utils"`
- **THEN** 导入正确解析，无编译错误
