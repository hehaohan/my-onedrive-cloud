/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
module.exports = {
  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
  // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
  clientId: 'a95fc5ac-dec1-4021-bb00-5fa380461ef3',
  obfuscatedClientSecret: 'U2FsdGVkX186oMXwZdjL+U7K/wgwGKf/o95bz7S7XIVs1z+Celo9i043H3nRilRharEQHwRmmBV3Z24Fzd9nZg==',

  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
  redirectUri: 'https://my-onedrive-cloud.vercel.app',

  // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
  // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // The scope we require are listed here, in most cases you would not need to change this as well.
  scope: 'user.read files.read.all offline_access',

  // 🚀 核心优化：让 Vercel CDN 全球节点为你强缓存 10 分钟目录结构，后台偷偷刷新，做到真正的毫秒级打开！
  cacheControlHeader: 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400',
}
