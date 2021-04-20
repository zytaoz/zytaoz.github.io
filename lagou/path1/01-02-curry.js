const _ = require('lodash');

/**
 * 给小朋友发糖果
 * @param {number} classnumber 班级
 * @param {string} name 姓名
 * @returns 结果
 */
function candyKids(classnumber, name) {
  return `给${classnumber}班的${name}小朋友发糖果`;
}

// const wxm = candyKids(1, '王小明');

const curryClass = _.curry(candyKids)
const lxr = curryClass(3, '李小冉');
const lxh = curryClass(2)('李晓红');
const class1 = curryClass(1);
const wxm = class1('王小明');

console.log(lxr);
console.log(lxh);
console.log(wxm);

function classRoom(classnumber) {
  return function(name) {
    return `给${classnumber}班的${name}小朋友发糖果`;
  }
}

const tzy = classRoom(2, '桃子');
console.log(tzy);