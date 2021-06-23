module.exports = {
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
    },
    {
      title: 'Vue 3',
      children: [
        {
          title: '组合 API',
          path: 'vue3/compositionApi'
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
          path: '/'
        }
      ]
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
  '/other/': ['偏激', 'upset'],
  '/course/lagou/': [
    {
      title: 'JavaScript 深度剖析',
      children: [
        {
          title: '函数式编程，异步，promise',
          children: [
            {
              title: '函数式编程',
              path: 'path1/FP.md'
            },
            {
              title: 'JavaScript 异步编程',
              path: 'path1/async.md'
            },
            {
              title: '手写 Promise 源码',
              path: 'path1/promise.md'
            }
          ]
        },
        {
          title: 'ES 新特性，TS，JS 性能优化',
          children: [
            {
              title: 'ECMAScript 新特征',
              path: 'path1/ecmascript.md'
            },
            {
              title: 'TypeScript',
              path: 'path1/typescript.md'
            },
            {
              title: 'JavaScript 性能优化',
              path: 'path1/js-optimize.md'
            }
          ]
        }
      ]
    },
    {
      title: '前端工程化实战',
      children: [
        {
          title: '开发脚手架及封装自动化构建工作流',
          children: [
            {
              title: '工程化概述',
              path: 'path2/engineering.md'
            },
            {
              title: '脚手架工具',
              path: 'path2/staging.md'
            },
            {
              title: '自动化构建',
              path: 'path2/automated-build.md'
            }
          ]
        }
      ]
    }
  ]
}