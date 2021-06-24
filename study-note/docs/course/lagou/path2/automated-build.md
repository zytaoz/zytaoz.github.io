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