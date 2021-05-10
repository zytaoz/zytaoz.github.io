const s = new Set();

// add 方法返回 set 本身，所以他可以链式调用
s.add(1).add(2).add('test').add({a: 12});
console.log(s); // => Set { 1, 2, 'test', { a: 12 } }

// 可以使用 set 的 foreach 方法进行遍历
s.forEach(i => console.log(i)); // => 1 2 test { a: 12 }

// 可以获取长度
console.log(s.size); // => 4

// 可以判断内部是否存在某个值
console.log(s.has(1)); // => true
console.log(s.has(32)); // => true
console.log(s.has({a: 12})); // =>  false 这里引用类型的对比相当于三等

// 可以删除指定的值
s.delete(2);
console.log(s); // => Set { 1, 'test', { a: 12 } }

// 可以直接清空
s.clear();
console.log(s); // => Set {}

// 可以给数组进行去重
const arr = [1, 2, 3, 1, 3, 6, 7];
const result = [...new Set(arr)];
console.log(result); // => [ 1, 2, 3, 6, 7 ]