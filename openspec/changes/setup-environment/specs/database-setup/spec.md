## ADDED Requirements

### Requirement: Drizzle ORM 配置连接 SQLite 数据库

系统 SHALL 通过 Drizzle ORM 配置连接到本地 SQLite 数据库，数据库文件位于 `data/vocabulary.db`。

#### Scenario: 数据库连接初始化

- **WHEN** 应用启动并访问数据库客户端
- **THEN** Drizzle ORM 成功连接到 SQLite 数据库文件

#### Scenario: 数据库文件自动创建

- **WHEN** `data/vocabulary.db` 文件不存在时应用首次访问数据库
- **THEN** SQLite 自动创建数据库文件

### Requirement: 数据库 schema 可通过 drizzle-kit push 同步

系统 SHALL 提供 `pnpm db:push` 命令，使用 `drizzle-kit push` 将 Drizzle schema 同步到数据库。

#### Scenario: 同步 schema 到数据库

- **WHEN** 开发者执行 `pnpm db:push`
- **THEN** 数据库表结构与 Drizzle schema 定义一致

### Requirement: 数据库文件不纳入版本控制

`data/` 目录 SHALL 被 `.gitignore` 排除，数据库文件不进入 git 仓库。

#### Scenario: 数据库文件被 gitignore

- **WHEN** 开发者执行 `git status`
- **THEN** `data/vocabulary.db` 不出现在未跟踪文件列表中
