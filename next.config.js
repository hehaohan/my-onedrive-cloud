const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 🚨 终极防丢补丁：强行要求 Vercel 在打包 Serverless 函数时，把这个多语言文件塞进去！
  outputFileTracingIncludes: {
    '/*': ['./next-i18next.config.js'],
    '/api/**/*': ['./next-i18next.config.js'],
  }
}
