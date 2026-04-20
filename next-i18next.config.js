const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    // 🚨 拨乱反正：恢复原项目极其严谨的国际标准语言代号！
    locales:[
      'en',
      'zh-CN',
      'zh-TW',
      'ja',
      'es',
      'ko',
      'fr',
      'de',
      'ru',
      'tr-TR',
      'id',
      'vi'
    ],
  },
  localePath: typeof window === 'undefined'
    ? path.resolve('./public/locales')
    : '/locales',
}
