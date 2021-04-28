const _ = require('lodash');

function log(tag, val) {
  console.log(tag, val);
  return val;
}

// 函数组合里面的函数只能是一元函数（只能接受一个参数），所以这里使用函数的柯里化，把多元函数变为一元函数
const split = _.curry((sep, str) => _.split(str, sep));
const join = _.curry((sep, arr) => _.join(arr, sep));
const map = _.curry((fn, arr) => _.map(arr, fn));
const newLog = _.curry((tag, val) => log(tag, val))


// 这里的 join('-') 和 split(' ') 都是已经柯里化以后的函数，他已经接受一个参数，执行之后就返回了一个一元函数，这个一元函数刚好放在函数组合里面使用
const fn1 = _.flowRight(join('-'), map(_.toLower), split(' '));

// console.log(fn1('HELLO WORLD'));

const fp = require('lodash/fp');
// lodash 中的 fp 模块都是已经柯里化后的函数，如果是有多个参数的化，都是函数优先，数据滞后的方式，可以直接使用。
const fn2 = _.flowRight(fp.join('-'), fp.map(_.toLower), fp.split(' '));
console.log(fn2('HELLO WORLD')); // => hello-world
