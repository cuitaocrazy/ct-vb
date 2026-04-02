# language: zh-CN
功能: 开发工具链

  场景: Lint 检查可运行
    当 执行 "pnpm lint"
    那么 命令成功完成无配置错误

  场景: 单元测试可运行
    当 执行 "pnpm test"
    那么 Vitest 正常启动

  场景: Cucumber 验收测试可运行
    当 执行 "pnpm test:e2e"
    那么 Cucumber 正常启动并扫描 feature 文件

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
