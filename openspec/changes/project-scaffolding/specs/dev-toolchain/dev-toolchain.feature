# language: zh-CN
功能: 开发工具链

  场景: ESLint 检查通过
    当 运行 ESLint 检查
    那么 ESLint 正常通过无错误

  场景: Vitest 测试通过
    当 运行 Vitest 测试
    那么 测试正常通过

  场景: Cucumber 配置有效
    当 加载 Cucumber 配置文件
    那么 配置包含 paths、require 和 language 字段

  场景: 所有脚本命令已定义
    当 检查 "package.json" 的 "scripts" 字段
    那么 包含以下命令:
      | 命令        |
      | dev         |
      | build       |
      | lint        |
      | test        |
      | test:e2e    |
      | db:generate |
      | db:migrate  |
