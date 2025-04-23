/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.stahlforce.eu',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/admin', '/hidden-page'],
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/admin' },
      ],
    },
  };
  