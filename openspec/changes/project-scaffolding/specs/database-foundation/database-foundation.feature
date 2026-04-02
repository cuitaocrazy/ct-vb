# language: zh-CN
功能: 数据库基础

  场景: 数据库连接可用
    当 导入数据库实例
    那么 执行 "SELECT 1" 查询成功

  场景: drizzle-kit 命令可用
    当 执行 "pnpm drizzle-kit generate"
    那么 命令正常运行无配置错误

  场景: Schema 文件可导入
    当 导入 "db/schema.ts"
    那么 模块正常加载无运行时错误
