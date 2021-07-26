# Webpack 打包

::: tip 写在前面
这篇基本都是一些 `webpack` 的基础使用方式，老师讲的课是基于 `webpack 4` 的，刚好我那个脚手架也是一样的，所以内容基本上也都是和之前所知道的是差不多的。

在看到作业的时候，整个人都陷入了深深地沉思：我是不是在一个“不好”的地方呆了太久了？找回之前的源码，那个为了“适应”而试图想办法在 `php` 项目中加载 `vue` 组件的“时代”。好像一切东西在18年第后就都变了，而我从18年底原地踏步到现在。那时候花了那么多的精力和时间去使用各种新技术实现各种各样的想法（希望小卖铺，账本，在线刷题，公司内部外卖点餐系统，四五个版本的个人网站等），然后把新技术应用到公司项目上，公司不予采纳，那就想办法在换一个。然而到今天我得到了什么？而对于一个做技术的人最重要的是什么？原本是一个走在最前面的人，为什么现在会成为这个样子？什么时候才能清醒一些？
:::

- [create-h5](https://github.com/lambortao/create-h5)
- [PHP-Vue](https://github.com/lambortao/php-vue)

::: tip
webpack 是把很多细碎的模块打包成一个文件，然后在打包的过程中可以再对文件进行二次加工（loader）。和传统前端需要分离各种文件不一样的是，webpack 把所有的文件都集中在 js 中引用去使用，他的思想是：你所需要的这个文件并不是你这个项目所需要，而是你当前这个模块需要，所以只需要把单个模块需要的文件引入好就行了。
:::


## 基础能力
`webpack` 就是模块打包机。可以使用 `webpack` 将很多前端模块打包成一个文件。而这种模块化工具并不是只针对 `js` 的打包工具，而是可以打包任何前端工程中的文件。

而 `webpack` 在打包的过程中会通过入口文件进行解析，把所有的模块都分类好，然后再解析到的资源模块交给对应的 `loader` 去打包执行（例如`css`中的`@import`，`html` 中的 `src` 等），在打包完成所有的文件和代码后，再把他们都输出到输出目录就好了。

### 加载资源的方式
- 支持 ES Modules 的 import 声明
- 支持 CommonJS 标准的 require 函数
- 支持 AMD 标准的 define 函数和 require 函数

虽然他支持真么多标准，但是不到万不得已不要混用啊，否则除了增加项目的维护难度之外没有任何好处。

## webpack 工作模式
工作模式一共分为三种，默认是 `production` 模式。
- development
- none
- production

模式可以在命令行中使用 `--mode ` 来指定
``` sh
yarn webpack --mode production
```

也可以在配置中添加 `mode` 字段来指定
``` javascript {4}
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // 这里不能使用相对路径要使用完整的绝对路径
    path: path.join(__dirname, 'output'),
  }
}
```
## 资源加载模块 - loader
他就是在 module rules 中添加各种规则，让 `webpack` 可以通过规则使用各种插件去加载各类的文件，下面这个代码是之前一个项目里面的，里面基本涵盖了比较基础的 `loader`。

这里不可能列出所有的 loader，这种东西只能是用到了再去查一查，而这些 `loader` 大概分为以下几类。

- 编译转换类
  - 把文件打包转换成 `js` 中的一个模块。
- 文件操作类
  - 把文件拷贝出去，然后把路径导出出去。
- 文件检查类
  - eslint

`loader` 的基础执行规则是**自下往上、自右往左**执行的。所以就需要把一些比较基础的功能放在最前面执行。
例如 `scss` 文件。
- 需要先把把 `scss` 文件转义成 `css` 文件。
- 再使用 `postcss-loader` 去做 `css` 浏览器兼容处理。
- 再使用 `css-loader` 去触发 `css` 中的其他加载指令（@import、url等）。
- 最后使用 `mini-css-extract-plugin` 去压缩 `css` 代码。


> 以下代码来自 [create-h5](https://github.com/lambortao/create-h5/blob/master/config/webpack.common.js#L16)
``` javascript
const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  module : {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "images/[name].[hash:6].[ext]",
              limit: 10 * 1024,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage' }]]
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'a:href', 'img:data-src', 'audio:src'],
            minimize: true
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|pdf|mp4)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'media/[name].[hash:8].[ext]'
          }
        }
      }
    ]
  }
}
```


可算区分出来 `file-loader` 和 `url-loader` 的区别了。
- file-loader
  - `file-loader` 是直接把文件拷贝到输出目录。
- url-loader 
  - `url-loader`，会把文件编程成 `data-url` 模式，而 `url-loader` 是一段编码，他可以用代码的形式来表达任何形式的文件。

## 开发一个 loader
`loader` 其实挺简单的，他就是一个输入，获取到输入的值之后做处理然后再把他输出出去，而输出出去的则必须是一段 `js` 代码（好像webpack 5 没有这个问题了，我尝试输出纯字符串也没有问题）。而他整个的输出过程就是一个管道 `use`，而这个管道就是前面一个 `loader` 执行完了就把文件交给下一个 `loader` 去执行。

``` javascript
const marked = require('marked');

module.exports = source => {
  console.log(source);
  const html = marked(source);
  // return `export default ${JSON.stringify(html)}`;
  return html;
}
```

## 插件 - plugin
为了增加 `webpack` 在项目自动化的能力。
- clean-webpack-plugin 用来清理指定目录
- html-webpack-plugin 用来生成基础的 html 文件
- copy-webpack-plugin 用来复制指定的文件

``` javascript {21-23}
const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  module : {
    rules: [
      {
        test: /.md$/,
        use: [
          'html-loader',
          './markdown-loader.js'
        ]
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin(),
    new copyWebpackPlugin(['public'])
  ]
}
```

## 开发一个 plugin
`plugin` 就是一个函数，他是通过往 `webpack` 的生命周期中挂载对应的函数来实现对应功能的。 

[webpack 钩子官方文档](https://webpack.docschina.org/api/compiler-hooks/#hooks)

``` javascript
const path = require('path');

class myPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('myPlugin', compilation => {
      // Compilation 就是当前打包用到的所有文件名字，如果读出来他就需要对他进行遍历
      for (const name in compilation.assets) {
        if (Object.hasOwnProperty.call(compilation.assets, name)) {
          const element = compilation.assets[name];
          // 使用 source() 方法获取到所有文件中的值
          const nowSource = element.source();
          // 真对值进行加工
          const newData = nowSource.replace(/\/\*\*+\*\//g, '');
          // 把加工后的值覆写进初始值
          compilation.assets[name] = {
            source: () => newData,
            size: () => newData.length
          }
        }
      }
    })
  }
}

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  plugins: [
    new myPlugin()
  ]
}
```

## 增强开发体验
这些基本上都是一些基础功能的介绍，除非是需要记录的，其他的都不在记录，会在最下面贴出源码，里面会用注释来标注功能。

### Webpack Dev server
[官方文档](https://webpack.docschina.org/configuration/dev-server/)

这个是 `webpack` 官方的工具，他具有启动本地服务（包括代码变动后自动编译和刷新）和请求的转发代理等功能。和常规的打包不同的是，`server` 在启动的时候并不会采用本地目录读写的方式，而是采用了把文件写入到内存中以提高读取的效率。

#### contentBase 
在开发过程中有一些静态文件是不需要被实时编译打包的，那这个时候就需要使用 `contentBase` 来指定这个静态文件目录，这样在 `dev server` 被启动后在碰到静态文件的时候就自动的去寻找该目录下的文件。

#### proxy
在本地开发的时候往往需要请求在线的接口地址，而这时候如果接口不允许跨域请求的话，前端是无法请求到接口的。这时候就需要使用 `proxy` 去代理请求接口。
- target 需要请求的接口
- pathRewrite 需要重写的代理名

::: warning 一些注意事项
在使用代理的时候，比如 `target` 使用的代理名是 `/api` 代理的服务器地址是 `https://server.zytao.cc/`。<br />
那么这时候请求 `/api/blog/article/list` 就相当于请求 `https://server.zytao.cc/api/blog/article/list`，但是我们的接口地址中并不需要 `/api` ，这时候就需要使用 `pathRewrite` 去重写这个代理名。
:::

``` javascript {5,17}
// 以下为一些常用的配置
const devConfig = {
  // 本地服务
  devServer: {
    contentBase: [path.join(__dirname, '../src'), './public'],
    // 自动打开浏览器
    open: true,
    // 热更新
    hot: true,
    // 监听静态文件目录
    watchContentBase: true,
    proxy: {
      '/api': {
        target: 'https://server.zytao.cc/',
        pathRewrite: {
          // 将 /api 代理名重写为空字符串
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
```

#### devtool
关于 `source map` 如何生成
[官方文档](https://webpack.docschina.org/configuration/devtool/#root)

有五个关键字，模式都是由这个五个关键字排列组成的。
- eval 使用 `eval` 来包裹生成的代码
- source-map 需要 `.map` 的文件
- cheap 不需要列信息
- module 包含第三方插件，如 `loader` 的 `source-map`
- inline 将 `map` 文件以 `DataURL` 的形式嵌入到代码中，不单独产生 `map` 文件 

##### 建议配置
**开发环境**

`cheap-module-eval-source-map` 用于开发环境，但是在 `webpack5` 中要改写成 `eval-cheap-module-source-map`。
- 一行代码不会太长，所以没有必要生成到列。
- 需要查看 `module` 的 `map`

**生产环境**

直接就用 `none` 免得暴露源代码。

#### HMR
[官方文档](https://webpack.docschina.org/guides/hot-module-replacement/)
他解决了修改代码后页面自动刷新，并不保留页面数据的问题。他会热替换有修改的模块而不会去全部刷新页面。

``` javascript {31}
// 开启 HMR
const webpack = require('webpack');

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  // 本地服务
  devServer: {
    contentBase: [path.join(__dirname, '../src'), './public'],
    // 自动打开浏览器
    open: true,
    // 热更新
    hot: true,
    // 启用 hotOnly 而不是 hot 的话，在代码报错之后他不会自动刷新
    hotOnly: true,
    // 监听静态文件目录
    watchContentBase: true,
    proxy: {
      '/api': {
        target: 'https://server.zytao.cc/',
        pathRewrite: {
          // 将 /api 代理名重写为空字符串
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  plugins: [
    // 热更新 HMR，HMR 是 webpack 内置的一个插件
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}
```

需要注意的事，热替换的代码需要自己去写！！！！这就和单元测试一样了，需要养成习惯去写，不然没有什么用。（当然第三方脚手架里面一般都经过特殊处理过了，不需要再写代码。而且 css 是使用 loader 去处理的，也不需要进行手动的热替换）。

简单来说，`webpack` 会暴露出来一个 `api` ，在这个 `api` 里面你可以监听到对应模块发生了变化，然后在监听的回调里面去执行对应模块的更新操作。

``` javascript
if (module.hot) {
  // 监听 print.js 的文件变换，如果有变化就执行更新操作
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}
```

## 区分开发和生产环境的配置
因为 webpack 在使用的过程中有一些只在开发的时候需要使用的配置，如 `devserver`，还有一些只在生产模式的时候才会用到的插件，如拷贝静态目录文件的 `copyWebpackPlugin`。所以在项目中可以使用文件把开发和生产的文件区分开来。

[之前配置好的文件](https://github.com/lambortao/create-h5/tree/master/config)

这里的思路和老师的思路是一样的，是将开发和生产的文件去区分开来，然后还有一个两个环境都能用的文件，里面都是一些公共的加载 `loader` 等，然后使用 `webpack-merge` 将他们合并在一起使用。

## DefinePlugin
在 `webpack` 配置文件中配置的常量，可以在业务代码里面使用。
``` javascript
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      // 需要注意的是这里声明的需要一个 javascript 表达式
      API_BASE_URL: 'https://server.zytao.cc'
    })
  ]
}
```

## 优化
### Tree Shaking
在打包的时候，把无用的代码删除掉。本质上来说他一共分为两个步骤。
- 标记无用代码，无用代码不予导出。
- 在压缩代码的时候将没有导出或者没有使用到的变量删除。

### concatenateModules
将模块合并到一个函数内打包，可以优化代码体积。

``` javascript
module.exports = {
  optimization: {
    usedExports: true, // 不导出没有用到的代码或者模块
    minimize: true, // 压缩代码
    concatenateModules: true, // 合并代码
  }
}
```

### babel 开启后 tree shaking 不执行的问题
因为 `tree shaking` 的运行条件是基于 `esmodule` 的，而早期的 `bebal` 版本会将代码中的 `esmodule` 规范的代码转义成 `commonjs` 规范，所以才会导致 `bebal` 失效。但是现在这个问题 `bebal` 内部已经解决掉了，如果还是有问题的话，可以在 `loader` 中设置一下。

``` javascript {11}
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'bebal-loader',
          options: {
            presets: [
              // 设置 modules 为 false，强制为 esm 规范
              ['@bebal/preset-ent', { modules: true }]
            ]
          }
        }
      }
    ]
  }
}
```

### sideEffects
`sideEffects` 的主要作用是用来标记 `npm` 包里面是否有副作用代码。

假设现在有这样一个使用场景，在一个 `components` 文件夹下，里面有多个组件的文件，还有一个 `index.js` 用于导出当前目录下的所有组件，而这时候有文件导入了这个组件库，但是只使用了其中一个组件，其他的组件并没有使用。那在打包的时候 `webpack` 也会将其他的组件一起打包出去。

这时候就要使用 `sideEffects` 来去除其他并未被使用的组件。但是在使用 `sideEffects` 的时候一定要注意，如果你的组件是一个没有其他副作用的组件，那么这样操作是可以的，但是如果你的组件有其他的副作用。那么 `sideEffects` 并不会保留你组建中副作用的代码。因为你引用了这个组件，但是没有使用它。比如你在 `js` 中引入了 `css` 文件，仅仅只是引入了，没有使用它，`css` 部分是这个模块的副作用。

这时候就需要设置一下参数。

> packjson.json
``` json
{
  "sideEffets": [
    "./src/tools.js",
    "*.scss",
    "*.css"
  ]
}
```

### 代码分包和代码

#### 多入口打包
就是按照页面把 `webpack` 的入口分为多个。[之前的配置文件](https://github.com/lambortao/create-h5/blob/master/config/getMapConfig.js#L31)

#### 提取公共模块
``` javascript {3}
const prodConfig = {
  optimization: {
    splitChunks: 'all'
  }
}
```

#### 动态导入
使用动态导入，`webpack` 会自动的按照导入的模块进行分页打包。动态导入的方法也很简单，把之前在页面顶部 `import` 的方式改成在使用的时候，用 `import()` 函数去加载就好了，需要注意的是 `import()` 函数返回的是一个 `promise`，需要使用 `.then` 的方式去获取导入的模块。

#### 魔法注释
一般情况下我们是不去控制打包后的文件名字的，打包后的文件名一般会被 `webpack` 按序号自动命名。但是 `webpack` 提供了魔法注释的功能来提供了修改模块打包后重命名的方式。
``` javascript
import(/* webpackChunkName: 'list' */'./src/article/list').then(({ default: list }) => {
  body.appendChild(list);
})
```

如果多个模块写了同样的输入名，那么他们就会被打包在一起。

#### 把 css 模块单独抽离出来
`mini-css-extract-plugin` 主要的作用就是把之前打包在 `style` 标签内的 `css`，抽离成独立的 `css`，然后使用 `link` 的方式导入进来。他要单独安装这个 `css`，然后还需要在 `css rules` 中的最后一步代替 `style-loader`。

[之前代码](https://github.com/lambortao/create-h5/blob/master/config/webpack.common.js#L22)

#### 压缩单独抽离出来的 css 代码
[optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)

#### 修改输出文件的 hash 名
hash 分为
- hash 一般的 hash
- chunkhash 针对模块生成的 hash
- contenthash 仅针对单个文件生成的 hash

[之前代码](https://github.com/lambortao/create-h5/blob/master/config/webpack.common.js#L105)