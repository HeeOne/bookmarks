const routerConfig = require('./router/index')

module.exports = {
  base: '/bookmarks/',
  title: 'Bookmarks',
  description: 'Mark awesome things',
  port: 3678,
  themeConfig: {
    nav: routerConfig.nav,
    sidebar: routerConfig.sidebar,
    sidebarDepth: 3
  }
}