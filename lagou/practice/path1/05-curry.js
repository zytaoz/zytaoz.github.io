// 自己实现一个 lodash 中的 curry 方法
const _ = require('lodash');

function sum(a, b, c) {
  return a + b + c;
}

const curried = myCurry(sum);

console.log(curried(1, 2, 3));
console.log(curried(1)(2, 3));
console.log(curried(1, 2)(3));
console.log(curried(1)(2)(3));

// 自己实现一个 curry 方法

// curry 接受一个函数
function myCurry (func) {
  // 并且返回一个函数，返回的这个函数也接受参数
  return function curried(...arges) {
    if (arges.length < func.length) {
      // 如果返回函数的参数数量小于接受函数的参数数量，那么就返回一个新的函数
      return function() {
        // 新的函数要把返回函数的参数和接受函数的参数合并在一起，然后重新放进返回函数内进行递归调用
        // 并且将递归的结果返回出去
        // 两个数组合并出来的是一个新的数据，但是返回函数接受的不是数组，所以需要把他拆分开来
        return curried(...arges.concat(Array.from(arguments)));
      }
    }
    // 如果返回函数的参数大于等于接受函数的函数，那么就直接把返回函数的参数放进接受函数内去执行他，并返回执行的结果
    return func(...arges);
  }
}