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