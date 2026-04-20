const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    // 覆盖了原项目所有的语言种类
    locales:['en', 'zh', 'tw', 'ja', 'es', 'ko', 'fr', 'de', 'ru', 'tr', 'id', 'vi'],
  },
  // 🚨 核心魔法：向 Vercel 发出死命令，无论在云端还是本地，必须沿着这个绝对路径把字典带上！
  localePath: typeof window === 'undefined'
    ? path.resolve('./public/locales')
    : '/locales',
}
