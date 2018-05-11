module.exports = {
  dest: 'dist',
  title: 'canvas-notes',
  base: '/canvas-playground/',
  description: 'Learning HTML5 canvas',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'https://github.com/chenwangji/canvas-playground',
    editLinks: false,
    docsDir: 'docs',
    nav: [
      {
        text: '笔记',
        link: '/'
      },
      {
        text: '示例',
        link: 'https://chenwangji.github.io/canvas-demo/'
      }
    ],
    sidebar: false
  }
}