// 使用多个纯函数加上函数柯里化来实现一个URL检查功能。
const _ = require('lodash');

// 首先定义一个基础的字符串校验函数，并且把函数柯里化
const checkString = (reg, str) => str.match(reg);
const curryCheckString = _.curry(checkString);

// 定义两个方法函数，查找空格和查找数字
const findSpace = curryCheckString(/\s+/g);
const findNumber = curryCheckString(/\d+/g);

// 查找数组里面的方法，并且柯里化
const checkArrFunc = (func, array) => array.filter(func);
const curryCheckArrFunc = _.curry(checkArrFunc);

// 定义两个查找数组内指定参数的方法
const findArraySpace = curryCheckArrFunc(findSpace);
const findArrayNumber = curryCheckArrFunc(findNumber);

console.log(findSpace('hello world'));
console.log(findNumber('hello 123'));
console.log(findArraySpace([' ', '12']));
console.log(findArrayNumber([' ', '12']));