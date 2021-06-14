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