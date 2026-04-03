Feature: 开发环境冒烟测试
  验证 Next.js 应用能正常启动并在浏览器中渲染首页。

  Scenario: 首页可正常访问
    Given 开发服务器已启动
    When 在浏览器中打开首页
    Then 页面成功渲染，无控制台错误
