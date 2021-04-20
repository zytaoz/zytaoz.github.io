function classRoom(classnumber) {
  return function(name) {
    return `给${classnumber}班的${name}小朋友发糖果`;
  }
}

// 生成两个班级
const classRoom1 = classRoom(1);
const classRoom2 = classRoom(2);
// 根据班级生成两个小朋友
const wxm = classRoom1('王小明');
const lxh = classRoom2('李晓红');
console.log(wxm);
console.log(lxh);