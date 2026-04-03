## ADDED Requirements

### Requirement: 项目可通过 pnpm dev 启动开发服务器

系统 SHALL 提供 `pnpm dev` 命令，启动 Next.js 开发服务器，在浏览器中可访问应用首页。

#### Scenario: 启动开发服务器

- **WHEN** 开发者在项目根目录执行 `pnpm dev`
- **THEN** Next.js 开发服务器启动成功，默认监听 `http://localhost:3000`

#### Scenario: 访问应用首页

- **WHEN** 开发者在浏览器中打开 `http://localhost:3000`
- **THEN** 页面正常渲染，无报错

### Requirement: 项目可通过 pnpm build 构建生产版本

系统 SHALL 提供 `pnpm build` 命令，成功构建 Next.js 生产版本。

#### Scenario: 执行生产构建

- **WHEN** 开发者执行 `pnpm build`
- **THEN** 构建成功完成，无 TypeScript 错误，输出到 `.next/` 目录

### Requirement: 项目使用 pnpm 作为包管理器

项目 SHALL 使用 pnpm 作为唯一的包管理器，不使用 npm 或 yarn。

#### Scenario: 安装依赖

- **WHEN** 开发者克隆项目后执行 `pnpm install`
- **THEN** 所有依赖安装成功，生成 `pnpm-lock.yaml`

### Requirement: ESLint 代码规范检查可用

系统 SHALL 提供 `pnpm lint` 命令，使用 ESLint flat config 检查代码规范。

#### Scenario: 执行代码规范检查

- **WHEN** 开发者执行 `pnpm lint`
- **THEN** ESLint 检查通过，无错误输出

### Requirement: 项目目录结构遵循约定

项目 SHALL 包含以下目录结构：`src/app/`（页面）、`src/components/`（组件）、`src/lib/`（工具函数）、`src/services/`（service 层）。

#### Scenario: 目录结构存在

- **WHEN** 开发者查看项目目录
- **THEN** `src/app/`、`src/components/`、`src/lib/`、`src/services/` 目录均存在
