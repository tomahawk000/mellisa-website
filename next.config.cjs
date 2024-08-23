module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/listings': { page: '/listings' },
      '/blog': { page: '/blog' },
      '/contact': { page: '/contact' },
      '/events': { page: '/events' },
      '/testimonials': { page: '/testimonials' },
    }
  },
};
