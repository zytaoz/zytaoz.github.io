# 自动化构建

## Gulp
在项目的根目录下要创建一个名为 `gulpfile.js` 的文件，改文件为 `gulp` 的入口文件。

### 基础使用
因为是在 `nodejs` 环境下，所以可以使用 `CommonJS` 规范。

这里定义了一个 `foo` 的函数，并且将它导出去了。因为在最新的 `gulp` 中已经取消了同步的语法，而使用异步语法取而代之，所以这里 `done` 来结束该函数，否则会报错。
``` javascript
exports.foo = done => {
  console.log('xxxx');
  done();
}
```

使用该命令执行上面的函数
``` sh
yarn gulp foo
```

如果这里声明了一个 `default` 函数，那么在执行的时候就可以省略函数名。

### 并联任务和串联任务
在 `gulp` 中可以使用并联语法或者串联语法，正如字面意思一样，并联语法就是多个函数同时执行，串联语法就是多个函数一个个执行。
``` javascript
const { series, parallel } = require('gulp');

const func1 = done => {
  setTimeout(() => {
    console.log('func1');
    done();
  }, 1000);
}
const func2 = done => {
  setTimeout(() => {
    console.log('func2');
    done();
  }, 1000);
}
const func3 = done => {
  setTimeout(() => {
    console.log('func3');
    done();
  }, 1000);
}

// 使用 series 创建串联任务，三个函数会依次执行，
exports.chuan = series(func1, func2, func3);

// 使用 parallel 创建并联任务，三个函数会同时执行
exports.bing = parallel(func1, func2, func3);
``` 

### `gulp` 处理异步任务的方法
在 `gulp` 中的异步任务和普通的 `js` 中没有什么太大的区别，都是需要异步函数后有一个回调的任务来通知异步已经完成。

### 使用 `done` 函数
`done` 函数的调用代表的异步函数已经执行完毕。

``` javascript
exports.callback = done => {
  console.log('done');
  done();
}
```

处理错误

``` javascript
exports.callbackError = done => {
  console.log('done');
  done(new Error('xxxxxx'));
}
```

### 使用 `promise` 来结束任务
``` javascript
// 成功的回调
exports.promise = () => {
  console.log('promise');
  return Promise.resolve();
}

// 失败的回调
exports.promiseError = () => {
  console.log('promise');
  return Promise.reject();
}
```

### 使用 `async` `await` 方案
``` javascript
exports.async = async () => {
  await timeout(1000);
  console.log('xxxx');
}
```

### 使用 `Stream` 的方法
``` javascript
exports.steam = () => {
  const readStream = fs.createReadStream('package.json');
  const writeStream = fs.createWriteStream('test.txt');
  readStream.pipe(writeStream);
  return readStream;
}
```

## Gulp 构建过程核心工作原理
::: tip
三个核心概念：读取流、转换流、写入流。

Gulp 就是一个基于文件流的构建系统，这样类似于管道的方式能更加有利于插件的使用。
:::
### 一个基础案例
> 将一个`css`文件读取出来，然后删除空格和注释进行压缩。
``` javascript
const fs = require('fs');
const { Transform } = require('stream');

exports.default = () => {
  // 读取文件流
  const read = fs.createReadStream('normalize.css');
  // 写入文件流
  const write = fs.createWriteStream('normalize.min.css');

  const transform = new Transform({
    transform: (chunk, encoding, callback) => {
      // 读取到的文件转换成字符串
      const input = chunk.toString();
      // 将读取到的字符串中的空格和注释全部都删掉
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\//g, '');
      // 结束文件流，callback 是错误优先的，如果没有错误处理的话第一个参数传null也可以
      callback(null, output);
    }
  })

  // 先转换，再写入
  read.pipe(transform).pipe(write);

  return read;
}
```
### Gulp 文件操作 API
主要是 `gulp` 的转换流的插件。

使用 `gulp` 提供的 `src` 插件实现读取流，使用 `dest` 实现写入流。
使用插件的优势是可以使用一些强大的功能。
- 使用 `*` 通配符去匹配对应目录下的所有对应文件。
- 使用插件在文件流中进行随意的搭配，以实现想要的功能。

``` javascript {7-9}
const { src, dest } = require('gulp');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

exports.default = () => {
  return src('*.css')
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}
```
## Gulp 案例

> 其实主要就是介绍插件的使用了

### gulp 插件
- `parallel` 并行执行 `gulp` 任务，可以组合的进行使用。

### 第三方插件列表
- `gulp-sass` - 转换 `sass` 文件
- `gulp-babel` - 转换新版 js 文件
- `gulp-swig` - 编译 `swig` `html` 模板。
- `gulp-imagemin` - 压缩图片，如果不是图片文件的话会直接移动过去
- `del` - 删除指定目录
- `gulp-load-plugins` - 可以自动的加载 `gulp-` 开头的插件，使用的时候直接去掉插件的 `gulp-` 开头即可，如果后续还有中划线的话，就自动改成小驼峰的方式命名。
- `browser-sync` - 启动本地服务器

### 开发服务器
- 启动本地服务器
- `browserSync` 监听 `dist` 目录下的文件是否有更新，如果有更新就自动刷新
- 在 `serve` 命令下还要有 `watch` 命令来监听开发目录下的文件是否有修改，否则只监听 `dist` 目录是没有意义的。
- `watch` 监听到 `src` 目录的修改后就自动响应文件打包任务，打包后的文件自动同步到 `dist` 目录，然后 `browserSync` 监听到 `dist` 目录下的文件修改，浏览器自动刷新。

### 减少构建过程
在开发阶段时候其实只需要打包一下必须要打包才能用的文件，比如 `html` `scss` `js` 等。对于其他的例如图片文件，字体文件等则不需要在开发的时候进行打包，因为他们不被打包也能被使用。

所以就需要在初始化 `browserSync` 的时候定义一下 `server`
``` javascript {17}
bs.init({
    // 是否显示右上角的通知
    notify: false,
    // 指定端口
    port: 3000,
    // 是否自动打开窗口
    open: true,
    // 那些目录下文件修改之后会重新刷新页面
    files: 'dist/**',
    server: {
      /**
       * 这里如果传一个字符串，那他就是服务器的根目录
       * 如果传的是一个数组，那么他就会从前向后找文件
       * 比如一个浏览器加载的一个文件在 dist 目录找不到，那么就会去 src 目录下找，以此类推
       * 这么做的目的因为在开发阶段没必要去打包图片和字体等文件，只需要打包一下必须要打包才能用的文件就行了
       */
      baseDir: ['dist', 'src', 'public'],
      // 路由的映射
      routes: {
        // 在启动服务器的时候如果需要映射其他目录的话可以这里添加路由
        '/node_modules': 'node_modules'
      }
    }
  })
}
```

### 整体代码
``` javascript
const { src, dest, parallel, series, watch } = require('gulp');
const del = require('del');
const browserSync = require('browser-sync');

const loadPlugins = require('gulp-load-plugins');

const plugins = loadPlugins();
const bs = browserSync.create();

const clean = () => {
  return del(['dist']);
}

// 转换 css 文件
const style = () => {
  // base 就是基准目录，他会以添加的这个目录为基准目录进行生成新的目录
  return src('src/assets/styles/*.scss', { base: 'src' })
    // outputStyle 就是 sass 编译后的样子，和正常的 sass 设置是一样的
    .pipe(plugins.sass({ outputStyle: 'compressed' }))
    // 写入流
    .pipe(dest('dist'))
    // 编译后重新刷新页面，返回的是一个 stream 流
    .pipe(bs.reload({ stream: true }))
}

// 转换 js
const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src' })
    // 使用 babel 来转换 ecma6 之后的所有文件
    .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
    .pipe(dest('dist'))
    .pipe(bs.reload({ stream: true }))
}

// 转换 html 文件
const page = () => {
  return src('src/**.html', { base: 'src' })
    // swig 是 html 模板引擎，这里可以接受一个 data 数据来写入 html 文件
    .pipe(plugins.swig({ data: plugins.swigData, defaults: { cache: false } }))
    .pipe(dest('dist'))
    .pipe(bs.reload({ stream: true }))
}

// 转换图片
const image = () => {
  return src('src/assets/images/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

// 转换字体等其他文件
const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

// 其他的文件
const extra = () => {
  return src('public/**', { base: 'public' })
    .pipe(dest('dist'))
}

// 本地服务
const serve = () => {
  /**
   * 在本地服务启动的时候，需要监听一下源代码目录下的文件是否有修改，如果有修改的话，就运行对应的任务进行打包
   * 打包完成后 browserSync 会监听到 dist 目录下的文件修改，然后就响应修改
   */
  watch('src/assets/styles/*.scss', style);
  watch('src/assets/scripts/*.js', script);
  watch('src/**.html', page);
  
  /**
   * 对于文件的监听和上面有一些区别，上面的这些在监听到文件修改后会启动打包任务
   * 而对于普通的静态文件，在监听到修改后只需要重新刷新一下页面就好了
   */
  watch([
    'src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload);

  bs.init({
    // 是否显示右上角的通知
    notify: false,
    // 指定端口
    port: 3000,
    // 是否自动打开窗口
    open: true,
    // 那些目录下文件修改之后会重新刷新页面，如果在打包任务后 pipe 有 reload 的话这里就不需要监听 files 了
    // files: 'dist/**',
    server: {
      /**
       * 这里如果传一个字符串，那他就是服务器的根目录
       * 如果传的是一个数组，那么他就会从前向后找文件
       * 比如一个浏览器加载的一个文件在 dist 目录找不到，那么就会去 src 目录下找，以此类推
       * 这么做的目的因为在开发阶段没必要去打包图片和字体等文件，只需要打包一下必须要打包才能用的文件就行了
       */
      baseDir: ['dist', 'src', 'public'],
      // 路由的映射
      routes: {
        // 在启动服务器的时候如果需要映射其他目录的话可以这里添加路由
        '/node_modules': 'node_modules'
      }
    }
  })
}

/**
 * 使用 parallel 进行组合任务
 * 这里是不打包没有办法使用的文件，如 css, js, html
 */
const compile = parallel(style, script, page);

/**
 * 这里可以使用 parallel 组合的命令
 * 因为这里是先清空后打包，所以要使用串联的命令 series，才能先清空后打包
 * 这里是打包项目目录
 */
const build = series(clean, parallel(compile, image, font, extra));

// 这里是开发模式，开发模式只需要打包一些不打包没办法使用的文件，和启动本地服务器就好了
const dev = series(compile, serve);

module.exports = {
  compile,
  build,
  serve,
  dev
}
```