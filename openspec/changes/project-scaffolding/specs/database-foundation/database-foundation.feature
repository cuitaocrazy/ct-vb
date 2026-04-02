# language: zh-CN
功能: 数据库基础

  场景: 数据库连接可用
    当 导入数据库实例并执行查询
    那么 查询返回成功结果

  场景: Schema 文件可导入
    当 动态导入 Schema 模块
    那么 模块正常加载无运行时错误

  场景: Drizzle 配置结构有效
    当 动态导入 Drizzle 配置
    那么 配置包含有效的 schema 和 dialect 字段
