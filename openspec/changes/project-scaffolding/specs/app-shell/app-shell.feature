# language: zh-CN
功能: 应用外壳

  场景: 首页可访问
    当 访问 "/"
    那么 页面显示 "单词本"

  场景: 页面渲染包含正确的 HTML 属性
    当 访问 "/"
    那么 HTML 元素的 "lang" 属性为 "zh-CN"
    而且 页面标题为 "单词本"

  场景: 目录结构存在
    当 检查项目根目录
    那么 以下目录均存在:
      | 目录             |
      | app/             |
      | features/        |
      | components/ui/   |
      | db/              |
      | lib/             |
