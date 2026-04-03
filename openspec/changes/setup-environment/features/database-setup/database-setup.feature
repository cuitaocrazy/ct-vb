Feature: 数据库连接冒烟测试
  验证应用能正常连接 SQLite 数据库。

  Scenario: 应用启动后数据库文件存在
    Given 开发服务器已启动
    When 访问首页触发数据库初始化
    Then data/vocabulary.db 文件已创建
