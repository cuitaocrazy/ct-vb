## ADDED Requirements

### Requirement: Drizzle ORM + SQLite 连接
系统 SHALL 使用 Drizzle ORM 配合 better-sqlite3 驱动建立 SQLite 数据库连接。连接配置位于 `db/index.ts`，导出可复用的数据库实例。

#### Scenario: 数据库连接可用
- **WHEN** 导入 `db/index.ts` 中的数据库实例
- **THEN** 可成功执行基本 SQL 查询（如 `SELECT 1`）

### Requirement: Drizzle 配置文件
项目 SHALL 提供 `drizzle.config.ts`，配置 schema 路径指向 `db/schema.ts`，使用 SQLite dialect。

#### Scenario: drizzle-kit 命令可用
- **WHEN** 执行 `pnpm drizzle-kit generate`
- **THEN** 命令正常运行，无配置错误

### Requirement: Schema 文件结构
项目 SHALL 提供 `db/schema.ts` 作为所有数据表定义的入口文件。初始状态下该文件不含业务表定义，仅作为后续 schema 开发的起点。

#### Scenario: Schema 文件可导入
- **WHEN** 导入 `db/schema.ts`
- **THEN** 模块正常加载，无运行时错误
