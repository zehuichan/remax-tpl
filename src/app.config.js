module.exports = {
  pages: [
    'pages/tabs/components/index',
    'pages/tabs/api/index',
  ],
  window: {
    defaultTitle: 'remaxjs ali tpl',
    navigationBarBackgroundColor: '#282c34'
  },
  tabBar: {
    textColor: '#282c34',
    selectedColor: '#1b73fa',
    backgroundColor: '#ffffff',
    items: [
      {
        pagePath: 'pages/tabs/components/index',
        name: '组件',
        icon: '/tabs/tab-1.png',
        activeIcon: '/tabs/tab-1-active.png'
      },
      {
        pagePath: 'pages/tabs/api/index',
        name: 'api',
        icon: '/tabs/tab-2.png',
        activeIcon: '/tabs/tab-2-active.png'
      },
    ]
  }
}
