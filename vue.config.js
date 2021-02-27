const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = ['', 'contact'].map(path => ({
  path: `/#/${path}`,
  lastmod: new Date().toISOString().slice(0, 10),
  priority: 0.5,
  changefreq: 'yearly'
}))

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: 'https://goldendawn-nc.org',
        paths,
        options: {
          filename: 'sitemap.xml',
          lastmod: true,
          changefreq: 'hourly',
          priority: 0.8
        }
      })
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'The Hermetic Order of the Golden Dawn® in North Carolina'
        return args
      })
  }
}
