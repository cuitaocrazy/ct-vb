# language: zh-CN
功能: 环境变量配置

  场景: 模板包含所有必要变量
    当 查看 ".env.example"
    那么 包含以下环境变量:
      | 变量名           |
      | YUNWU_API_KEY    |
      | YUNWU_BASE_URL   |
      | YUNWU_MODEL      |
      | MW_DICTIONARY_KEY|
      | MW_THESAURUS_KEY |

  场景: 密钥不暴露到客户端
    当 检查 ".env.example" 中的变量名
    那么 无任何变量以 "NEXT_PUBLIC_" 开头

  场景: 密钥文件不被追踪
    当 创建 ".env.local" 并运行 "git status"
    那么 ".env.local" 不出现在未追踪文件列表中
