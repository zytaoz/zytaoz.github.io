const man = { name: 'tzy', age: '29' };

// 结构对象，要使用 key 去获取
const { name } = man;
console.log(name); // => tzy

// 如果不想使用 key ，还可以重命名
const { name: myName } = man;
console.log(myName); // => tzy

// 还可以设置默认值
const { enName = 'lambortao' } = man;
console.log(enName); // => lambortao