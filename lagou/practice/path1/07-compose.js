// 结合律
const _ = require('lodash');

const fn1 = _.flowRight(_.toUpper, _.first, log, _.reverse);
const fn2 = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse);
const fn3 = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse));

function log(val) {
  console.log(val);
  return val;
}

console.log(fn1(['one', 'two', 'three'])); // => THREE
console.log(fn2(['one', 'two', 'three'])); // => THREE
console.log(fn3(['one', 'two', 'three'])); // => THREE

