const obj = {
  name: 'tzy',
  age: 30
}

/**
 * 老的操作方式
 * 同样是对对象进行操作，操作的方式却是千奇百怪
 */
// 判断对象内是否有该属性
console.log('name' in obj);
// 删除指定属性
console.log(delete obj.name);
// 获取所有的 key
console.log(Object.keys(obj));

/**
 * 使用 reflect，操作看起来会规范非常多
 */
console.log(Reflect.has(obj, 'name'));
console.log(Reflect.deleteProperty(obj, 'age'));
console.log(Reflect.ownKeys(obj));


class test {}
console.log(test instanceof Function); // => true