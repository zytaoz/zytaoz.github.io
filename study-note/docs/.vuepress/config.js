var head = require('./config/head/index.js');
var themeConfig = require('./config/theme/index.js');
var codePen = require('./config/codepen/index');

module.exports = {
  title: '桃子的笔记',
  description: '书山有路勤为径，学海无涯苦作舟',
  dest: '../study',
  base: '/study/',
  head: head,
  themeConfig: themeConfig,
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    codePen,
    [
      "md-enhance",
      {
        mermaid: true,
        mark: true
      },
    ]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    },
    lineNumbers: true
  }
}