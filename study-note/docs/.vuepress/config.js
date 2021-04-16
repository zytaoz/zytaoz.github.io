module.exports = {
  title: '桃子的笔记',
  description: '书山有路勤为径，学海无涯苦作舟',
  dest: '../study',
  base: '/study/',
  head: [
    ['link', { rel: 'icon', href: '/notebook.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/notebook.png' }],
    ['link', { rel: 'mask-icon', href: '/notebook.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/notebook.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    sidebar: {
      '/web/basis/': [
        {
          title: '前端基础',
          children: [
            {
              title: 'HTML & CSS',
              path: 'html'
            },
            {
              title: '变量类型和计算',
              path: 'variable'
            },
            {
              title: '三座大山',
              children: [
                {
                  title: '作用域和闭包',
                  path: 'closure'
                },
                {
                  title: '原型和原型链',
                  path: 'phototype'
                },
                {
                  title: '异步与单线程',
                  path: 'async'
                },
              ]
            },
            {
              title: 'web API',
              children: [
                {
                  title: 'BOM',
                  path: 'bom'
                },
                {
                  title: 'DOM',
                  path: 'dom'
                }
              ]
            },
            {
              title: 'ES 6',
              path: 'es6'
            }
          ]
        }
      ],
      '/web/advanced/ts/': [
        {
          title: 'TypeScript',
          children: [
            {
              title: '基础概念',
              path: 'basis'
            }
          ]
        }
      ],
      '/web/advanced/vue/': [
        {
          title: 'Vue',
          children: [
            {
              title: '基础概念',
              path: 'basis'
            }
          ]
        }
      ],
      '/web/advanced/react/': [
        {
          title: 'React',
          children: [
            {
              title: '基础概念',
              path: 'basis'
            },
            {
              title: '组件',
              path: 'component.md'
            },
            {
              title: '生命周期',
              path: 'lifecycle'
            }
          ]
        },
        {
          title: 'Redux',
          children: [
            {
              title: '基础概念',
              path: 'redux/basis'
            },
            {
              title: '中间件',
              path: 'redux/middleware'
            },
            {
              title: 'React-redux',
              path: 'redux/react-redux'
            },
            {
              title: '拆分 reducer',
              path: 'redux/combineReducers'
            }
          ]
        },
        {
          title: 'Hook',
          path: 'hook'
        }
      ],
      '/server/php/': [
        {
          title: 'PHP 语言基础',
          children: [
            {
              title: '基础语法',
              path: 'basis/basis'
            },
            {
              title: '类型',
              children: [
                {
                  title: '类型基础',
                  path: 'basis/types/home'
                },
                {
                  title: 'Boolean 布尔值',
                  path: 'basis/types/boolean'
                },
                {
                  title: 'Integer 整型',
                  path: 'basis/types/int'
                },
                {
                  title: 'Float 浮点型',
                  path: 'basis/types/float'
                },
                {
                  title: 'String 字符串',
                  path: 'basis/types/string'
                },
                {
                  title: 'Array 数组',
                  path: 'basis/types/array'
                },
                {
                  title: 'Object 对象',
                  path: 'basis/types/object'
                },
                {
                  title: 'NULL',
                  path: 'basis/types/null'
                }
              ]
            },
            {
              title: '变量',
              path: 'basis/variables'
            },
            {
              title: '常量',
              path: 'basis/constants'
            },
            {
              title: '表达式',
              path: 'basis/expressions'
            },
            {
              title: '运算符',
              path: 'basis/operators'
            },
            {
              title: '流程控制',
              path: 'basis/structures'
            },
            {
              title: '函数',
              path: 'basis/functions'
            },
            {
              title: '类与对象',
              path: 'basis/oop5'
            },
            {
              title: '命名空间',
              path: 'basis/namespaces'
            }
          ]
        },
        {
          title: 'CI',
          path: 'library/CI'
        },
        {
          title: 'Laravel',
          path: 'library/laravel'
        }
      ],
      '/server/java/': [
        {
          title: 'Java',
          path: '/'
        }
      ],
      '/server/node/': [
        {
          title: 'koa',
          children: [
            {
              title: 'KOA',
              path: ''
            }
          ]
        }
      ],
      '/server/python/': [
        {
          title: 'python',
          path: '/'
        }
      ],
      '/server/mysql/': [
        {
          title: 'MySQL',
          path: 'basis'
        }
      ],
      '/tools/': [
        {
          title: 'Git',
          path: 'git'
        }
      ],
      '/projects/': [
        {
          title: '希望小卖铺',
          collapsable: false,
          path: 'hopesnack'
        }, {
          title: '在线刷题',
          collapsable: false,
          path: 'testhub'
        }
      ],
      '/other/': ['偏激', 'upset']
    },
    nav: [
      {
        text: 'web前端',
        items: [
          {
            text: '基础',
            items: [
              {
                text: 'HTML & CSS',
                link: '/web/basis/html'
              },
              {
                text: 'JavaScript 基础',
                link: '/web/basis/variable'
              },
              {
                text: '三座大山',
                link: '/web/basis/closure'
              },
              {
                text: 'web API',
                link: '/web/basis/bom'
              },
              {
                text: 'ES6',
                link: '/web/basis/es6'
              }
            ]
          },
          {
            text: '进阶',
            items: [
              {
                text: 'TypeScript',
                link: '/web/advanced/ts/basis'
              },
              {
                text: 'Vue',
                link: '/web/advanced/vue/basis'
              },
              {
                text: 'React',
                link: '/web/advanced/react/basis'
              },
              // {
              //   text: '库',
              //   link: '/web/advanced/libs/'
              // },
            ]
          }
        ]
      },
      {
        text: '服务端',
        items: [
          {
            text: '语言',
            items: [
              {
                text: 'NodeJS',
                link: '/server/node/koa'
              },
              {
                text: 'PHP',
                link: '/server/php/basis/basis'
              },
              {
                text: 'Java',
                link: '/server/java/'
              },
              {
                text: 'Python',
                link: '/server/python/'
              },
              {
                text: 'MySql',
                link: '/server/mysql/basis'
              }
            ]
          },
          {
            text: '其他',
            items: [
              {
                text: '服务器相关',
                link: '/server/server/'
              },
              {
                text: 'JWT',
                link: '/server/JWT/'
              },
              {
                text: 'TCP/IP',
                link: '/server/TCP/'
              },
              {
                text: 'Socket',
                link: '/server/socket/'
              },
              {
                text: '微信相关',
                link: '/wechat/'
              }
            ]
          }
        ]
      },
      {
        text: '开发工具',
        items: [
          {
            text: 'Git',
            link: '/tools/git'
          }
        ]
      },
      {
        text: '项目',
        items: [
          {
            text: '希望小卖铺',
            link: '/projects/hopesnack'
          },
          {
            text: '在线刷题',
            link: '/projects/testhub'
          },
          {
            text: 'Alfred',
            link: '/projects/alfred/'
          }
        ]
      },
      {
        text: '其他',
        link: '/other/偏激'
      }
    ],
    lastUpdated: '最后更新'
  },
  plugins: ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  }
}