// 函数组合，一个简单的，接受两个函数的函数组合
function compose(fn1, fn2) {
  return function(val) {
    return fn1(fn2(val))
  }
}

/**
 * 获取到函数的最后一个数字，这里为了演示函数组合，把这个操作分成两个步骤
 * 1、把数组反转
 * 2、获取数组第一位
 */
const reverse = arr => arr.reverse();
const first = arr => arr[0];
// 先反转再获取第一个
const newCompose = compose(first, reverse);
console.log(newCompose([1, 2, 3, 4]));

// 使用 lodash 中的 flowRight 方法
const _ = require('lodash');
// 把指转换成大写
const toUpper = str => str.toUpperCase();

const newToUpperFunc = _.flowRight(toUpper, first, reverse);
console.log(newToUpperFunc(['one', 'two', 'three']));


// 手动实现一个函数组合方法

// 函数组合方法接受多个参数
function compose(...args) {
  // 函数组合方法会返回一个函数，返回的函数同时会接受一个参数，这个参数是初始值
  return function(val) {
    // 反转接受到的参数，然后使用 reduce 方法把函数分别传入来执行
    return args.reverse().reduce(function(t, f) {
      return f(t)
    }, val)
  }
}

const comToUpperFunc = compose(toUpper, first, reverse);
console.log(comToUpperFunc(['one', 'two', 'three']));