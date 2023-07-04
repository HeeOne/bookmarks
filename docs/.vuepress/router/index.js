const config = [
  {
    title: '库/API',
    path: '/repository/',
    children: [
      ''
    ]
  },
  {
    title: '工具',
    path: '/tool/',
    children: [
      ''
    ]
  },
  {
    title: '阅读',
    path: '/read/',
    children: [
      ''
    ]
  },
  {
    title: '面试',
    path: '/interview/',
    children: [
      ''
    ]
  },
  {
    title: '其他',
    path: '/other/',
    children: [
      ''
    ]
  },
  {
    title: '电影',
    path: '/movies/',
    children: [
      ''
    ]
  },
  {
    title: '首页',
    path: '/',
    children: [
      ''
    ],
    isHideNav: true
  }
]

const nav = []
const sidebar = {}

config.forEach(element => {
  if(!element.isHideNav) {
    nav.push({
      text: element.title,
      link: element.path
    })
  }
  sidebar[element.path] = [
    {
      title: element.title,
      children: element.children,
      collapsable: false
    }
  ]
});



module.exports = { nav, sidebar }