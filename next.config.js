/** @type {import('next').NextConfig} */
// next.config.js
const withSitemap = require('next-sitemap');
const nextConfig = {}

module.exports = nextConfig

module.exports = withSitemap({
  siteUrl: 'https://www.elormslearningjourney.tech', // Replace with your site's URL
  // You can add additional sitemap configuration options here if needed
});

// const withSitemap = require('next-sitemap');

// const nextConfig = {
//   // Your Next.js configuration options go here
//   // For example, you can set up environment variables, custom webpack configs, etc.
// };

// module.exports = withSitemap({
//   ...nextConfig, // Spread existing Next.js configurations
//   siteUrl: 'https://www.elormslearningjourney.tech', // Replace with your site's URL
//   // You can add additional sitemap configuration options here if needed
// });
