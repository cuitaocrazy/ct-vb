## ADDED Requirements

### Requirement: 环境变量模板
项目 SHALL 提供 `.env.example` 文件，包含所有外部服务的环境变量占位，附带注释说明用途。

#### Scenario: 模板包含所有必要变量
- **WHEN** 查看 `.env.example`
- **THEN** 包含以下变量（附注释）：`YUNWU_API_KEY`、`YUNWU_BASE_URL`、`YUNWU_MODEL`、`MW_DICTIONARY_KEY`、`MW_THESAURUS_KEY`

### Requirement: 环境变量安全性
所有 API 密钥相关的环境变量 SHALL NOT 使用 `NEXT_PUBLIC_` 前缀，确保密钥仅在服务端可用，不泄露到客户端 bundle。

#### Scenario: 密钥不暴露到客户端
- **WHEN** 检查 `.env.example` 中的变量名
- **THEN** 无任何变量以 `NEXT_PUBLIC_` 开头

### Requirement: .env.local 被 Git 忽略
`.gitignore` SHALL 包含 `.env` 和 `.env.*`（排除 `.env.example`）的忽略规则，防止密钥被提交。

#### Scenario: 密钥文件不被追踪
- **WHEN** 创建 `.env.local` 并运行 `git status`
- **THEN** `.env.local` 不出现在未追踪文件列表中
