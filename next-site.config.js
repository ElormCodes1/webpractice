/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://elormslearningjourney.tech',
    generateRobotsTxt: true,
    // optional
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }],
      },
  }