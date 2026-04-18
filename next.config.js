const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  // Required by Next i18n with API routes, otherwise API routes 404 when fetching without trailing slash
  trailingSlash: true,
  
  // 🛡️ 核心优化：彻底关闭 Vercel 默认的图像优化 API，强制使用原图直链
  // 既能提升图片加载速度，又能完美保护 Vercel 的 1000 张/月免费额度不被耗尽！
  images: {
    unoptimized: true,
  }
}