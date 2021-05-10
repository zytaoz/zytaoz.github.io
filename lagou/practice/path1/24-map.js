const m = new Map();

const lambor = { name: 'lambor' };

// 使用 set 方法来设置键值，第一个参数是键，可以是任何形式，第二个参数是值
m.set(lambor, 90);
console.log(m); // => Map { { name: 'lambor' } => 90 }

// 使用 get 获取值
console.log(m.get(lambor)); // => 90

// 使用 has 来判断是否有指定的键
console.log(m.has(lambor)); // => true

// 使用 delete 删除指定键
m.delete(lambor)
console.log(m); // => Map {}


// 使用 clear 来清空键
m.set(lambor, 90);
m.clear();
console.log(m); // => Map {}

// 使用 forEach 来遍历，遍历的时候有两个参数，第一个是值，第二个是键
m.set(lambor, 90);
m.forEach((value, key) => {
  console.log(value, key);
});
