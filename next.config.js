const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 🚨 霸王条款：强迫 Vercel 机器人无论如何必须把配置文件和字典文件夹打包进服务器！
  experimental: {
    outputFileTracingIncludes: {
      '/*':['./next-i18next.config.js', './public/locales/**/*'],
      '/api/**/*': ['./next-i18next.config.js', './public/locales/**/*'],
    }
  }
}
