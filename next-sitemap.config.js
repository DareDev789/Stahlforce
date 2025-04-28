/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.stahlforce.eu',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    additionalPaths: async (config) => {
      return [
        await config.transform(config, '/'),
        await config.transform(config, '/products'),
        await config.transform(config, '/precision-product'),
        await config.transform(config, '/certifications'),
        await config.transform(config, '/applications'),
        await config.transform(config, '/about_us'),
        await config.transform(config, '/contact'),
      ];
    },
  };
  