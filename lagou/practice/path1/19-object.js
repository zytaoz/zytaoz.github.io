const obj1 = {
  a: 123,
  b: 234
};

const obj2 = {
  c: 345,
  b: 456
}

const obj3 = Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj3);
console.log(obj1 === obj3);

const obj4 = Object.assign({}, obj2);
console.log(obj4);
console.log(obj2);
console.log(obj4 === obj2); // 这是深拷贝吗？

const obj5 = {
  name: 'lambortao',
  age: 29,
  address: {
    city: '上海',
    area: '杨浦'
  }
}

const obj6 = Object.assign({}, obj5);
obj5.age = 30;
obj5.address.area = '浦东新区';
console.log(obj5); // => { name: 'lambortao', age: 30, address: { city: '上海', area: '浦东新区' } }
console.log(obj6); // => { name: 'lambortao', age: 29, address: { city: '上海', area: '浦东新区' } }