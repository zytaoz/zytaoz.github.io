export default {
  '/web/basis/': [
    {
      text: '前端基础',
      items: [
        {
          text: 'HTML & CSS',
          link: '/web/basis/html'
        },
        {
          text: '变量类型和计算',
          link: '/web/basis/variable'
        },
        {
          text: '三座大山',
          items: [
            {
              text: '作用域和闭包',
              link: '/web/basis/closure'
            },
            {
              text: '原型和原型链',
              link: '/web/basis/phototype'
            },
            {
              text: '异步与单线程',
              link: '/web/basis/async'
            },
          ]
        },
        {
          text: 'web API',
          link: '/web/basis/bom',
          items: [
            {
              text: 'BOM',
              link: '/web/basis/bom'
            },
            {
              text: 'DOM',
              link: '/web/basis/dom'
            }
          ]
        },
        {
          text: 'ES 6',
          link: '/web/basis/es6'
        }
      ]
    }
  ],
  '/web/advanced/ts/': [
    {
      text: 'TypeScript',
      items: [
        {
          text: '基础概念',
          link: '/web/advanced/ts/basis'
        }
      ]
    }
  ],
  '/web/advanced/vue/': [
    {
      text: 'Vue',
      items: [
        {
          text: '基础概念',
          link: '/web/advanced/vue/basis'
        }
      ]
    },
    {
      text: 'Vue 3',
      items: [
        {
          text: '组合 API',
          link: '/web/advanced/vue/vue3/compositionApi'
        }
      ]
    }
  ],
  '/web/advanced/react/': [
    {
      text: 'React',
      items: [
        {
          text: '基础概念',
          link: '/web/advanced/react/basis'
        },
        {
          text: '组件',
          link: '/web/advanced/react/component.md'
        },
        {
          text: '生命周期',
          link: '/web/advanced/react/lifecycle'
        }
      ]
    },
    {
      text: 'Redux',
      items: [
        {
          text: '基础概念',
          link: '/web/advanced/react/redux/basis'
        },
        {
          text: '中间件',
          link: '/web/advanced/react/redux/middleware'
        },
        {
          text: 'React-redux',
          link: '/web/advanced/react/redux/react-redux'
        },
        {
          text: '拆分 reducer',
          link: '/web/advanced/react/redux/combineReducers'
        }
      ]
    },
    {
      text: 'Hook',
      link: '/web/advanced/react/hook'
    }
  ],
  '/server/php/': [
    {
      text: 'PHP 语言基础',
      items: [
        {
          text: '基础语法',
          link: '/server/php/basis/basis'
        },
        {
          text: '类型',
          items: [
            {
              text: '类型基础',
              link: '/server/php/basis/types/home'
            },
            {
              text: 'Boolean 布尔值',
              link: '/server/php/basis/types/boolean'
            },
            {
              text: 'Integer 整型',
              link: '/server/php/basis/types/int'
            },
            {
              text: 'Float 浮点型',
              link: '/server/php/basis/types/float'
            },
            {
              text: 'String 字符串',
              link: '/server/php/basis/types/string'
            },
            {
              text: 'Array 数组',
              link: '/server/php/basis/types/array'
            },
            {
              text: 'Object 对象',
              link: '/server/php/basis/types/object'
            },
            {
              text: 'NULL',
              link: '/server/php/basis/types/null'
            }
          ]
        },
        {
          text: '变量',
          link: '/server/php/basis/variables'
        },
        {
          text: '常量',
          link: '/server/php/basis/constants'
        },
        {
          text: '表达式',
          link: '/server/php/basis/expressions'
        },
        {
          text: '运算符',
          link: '/server/php/basis/operators'
        },
        {
          text: '流程控制',
          link: '/server/php/basis/structures'
        },
        {
          text: '函数',
          link: '/server/php/basis/functions'
        },
        {
          text: '类与对象',
          link: '/server/php/basis/oop5'
        },
        {
          text: '命名空间',
          link: '/server/php/basis/namespaces'
        }
      ]
    },
    {
      text: 'CI',
      link: '/server/php/library/CI'
    },
    {
      text: 'Laravel',
      link: '/server/php/library/laravel'
    }
  ],
  '/server/java/': [
    {
      text: 'Java',
      link: '/server/java/'
    }
  ],
  '/server/node/': [
    {
      text: 'koa',
      items: [
        {
          text: 'KOA',
          link: '/server/node/'
        }
      ]
    }
  ],
  '/server/mysql/': [
    {
      text: 'MySQL',
      link: '/server/mysql/basis'
    }
  ],
  '/tools/': [
    {
      text: 'Git',
      link: '/tools/git'
    }
  ],
  '/projects/': [
    {
      text: '希望小卖铺',
      collapsable: false,
      link: '/projects/hopesnack'
    }, {
      text: '在线刷题',
      collapsable: false,
      link: '/projects/testhub'
    }
  ],
  '/other/': ['偏激', 'upset'],
  '/course/lagou/': [
    {
      text: 'JavaScript 深度剖析',
      items: [
        {
          text: '函数式编程，异步，promise',
          items: [
            {
              text: '函数式编程',
              link: '/course/lagou/link1/FP.md'
            },
            {
              text: 'JavaScript 异步编程',
              link: '/course/lagou/link1/async.md'
            },
            {
              text: '手写 Promise 源码',
              link: '/course/lagou/link1/promise.md'
            }
          ]
        },
        {
          text: 'ES 新特性，TS，JS 性能优化',
          items: [
            {
              text: 'ECMAScript 新特征',
              link: '/course/lagou/link1/ecmascript.md'
            },
            {
              text: 'TypeScript',
              link: '/course/lagou/link1/typescript.md'
            },
            {
              text: 'JavaScript 性能优化',
              link: '/course/lagou/link1/js-optimize.md'
            }
          ]
        }
      ]
    },
    {
      text: '前端工程化实战',
      items: [
        {
          text: '开发脚手架及封装自动化构建工作流',
          items: [
            {
              text: '工程化概述',
              link: '/course/lagou/link2/engineering.md'
            },
            {
              text: '脚手架工具',
              link: '/course/lagou/link2/staging.md'
            },
            {
              text: '自动化构建',
              link: '/course/lagou/link2/automated-build.md'
            }
          ]
        },
        {
          text: '模块化开发与规范化标准',
          items: [
            {
              text: '模块化开发',
              link: '/course/lagou/link2/module-develop.md'
            },
            {
              text: 'Webpack 打包',
              link: '/course/lagou/link2/webpack-build.md'
            },
            {
              text: '其他打包工具',
              link: '/course/lagou/link2/other-build-tools.md'
            },
            {
              text: '规范化标准',
              link: '/course/lagou/link2/eslint.md'
            },
            {
              text: 'Webpack 源码',
              link: '/course/lagou/link2/webpack-soundcode.md'
            }
          ]
        }
      ]
    },
    {
      text: 'Vue 源码与进阶',
      items: [
        {
          text: 'Vue 基础概念',
          link: '/course/lagou/link3/basis.md'
        },
        {
          text: 'Router、响应式、虚拟DOM和Diff算法',
          items: [
            {
              text: 'Vue Router 源码及实现',
              link: '/course/lagou/link3/module1/router.md'
            },
            {
              text: '响应式原理',
              link: '/course/lagou/link3/module1/response-principle.md'
            },
            {
              text: '虚拟 DOM 和 Diff 算法',
              link: '/course/lagou/link3/module1/virtual-dom.md'
            }
          ]
        },
        {
          text: 'Vue 源码分析',
          items: [
            {
              text: 'Vue 源码分析',
              link: '/course/lagou/link3/module2/source-code.md'
            }
          ]
        },
        {
          text: 'Vuex 和 SSR',
          items: [
            {
              text: 'Vuex',
              link: '/course/lagou/link3/module3/vuex.md'
            }
          ]
        },
        {
          text: '搭建自己的SSR/SSG/组件库',
          items: [
            {
              text: '搭建自己的SSR',
              link: '/course/lagou/link3/module4/my-ssr.md'
            }
          ]
        },
        {
          text: 'Vue 3',
          items: [
            {
              text: 'Composition API',
              link: '/course/lagou/link3/module5/compostion-api.md'
            }
          ]
        },
        {
          text: '实战项目',
          items: [
            {
              text: '实战项目',
              link: '/course/lagou/link3/module6/true-project.md'
            }
          ]
        }
      ]
    }
  ]
}