const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  // 🛡️ 保护 Vercel 免费额度，关闭图像优化刺客
  images: {
    unoptimized: true,
  },
}
