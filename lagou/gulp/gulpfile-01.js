// gulp 的入口文件

// 定义了一个名字为 foo 的任务
// 输入 yarn gulp foo 执行该函数
// 在最新的 gulp 中，取消了同步的函数，全部都是异步的函数，在每个函数之后都要是。
exports.foo = done => {
  console.log('xxxx');
  done();
}

// 如果使用了 default 函数的话，他就是默认的函数，在使用的时候不用指定函数名字
exports.default = done => {
  console.log('default');
  done();
}


// 执行组合 api，创建并行任务和创建串联任务

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

exports.chuan = series(func1, func2, func3);

exports.bing = parallel(func1, func2, func3);


exports.callback = done => {
  console.log('done');
  done();
}

exports.callbackError = done => {
  console.log('done');
  done(new Error('xxxxxx'));
}

exports.promise = () => {
  console.log('promise');
  return Promise.resolve();
}

exports.promiseError = () => {
  console.log('promise');
  return Promise.reject();
}

function timeout(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

exports.async = async () => {
  await timeout(1000);
  console.log('xxxx');
}

const fs = require('fs');

exports.steam = () => {
  const readStream = fs.createReadStream('package.json');
  const writeStream = fs.createWriteStream('test.txt');
  readStream.pipe(writeStream);
  return readStream;
}