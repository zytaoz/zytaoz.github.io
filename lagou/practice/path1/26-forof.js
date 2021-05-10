// 遍历普通数组
const arr = [1, 2, 3];
for (const iterator of arr) {
  console.log(iterator);
}

// 遍历 set 数据结构
const s = new Set();
s.add(1).add(2);
for (const iterator of s) {
  console.log(iterator); // 1 2
}

// 遍历 map 数据结构
const m = new Map();
m.set('name', 'lambor');
m.set('age', 30);
for (const iterator of m) {
  console.log(iterator); // => [ 'name', 'lambor' ] [ 'age', 30 ]
}

// 上面的例子可以用结构去获取实际的内容
for (const [key, val] of m) {
  console.log(key, val); // => 'name', 'lambor' 'age', 30
}

const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next()); // => { value: 1, done: false }
console.log(arrIterator.next()); // => { value: 2, done: false }
console.log(arrIterator.next()); // => { value: 3, done: false }
console.log(arrIterator.next()); // => { value: undefined, done: true }

const todos = {
  one: ['a', 'b', 'c'],
  two: ['d', 'e'],

  // 实现内部的迭代器
  [Symbol.iterator]: function() {
    // 首先将内部的数据都取出来
    const allData = [...this.one, ...this.two];
    // 然后维护一个index
    let index = 0;
    // 返回一个迭代器，它里面有一个 next 方法，返回的就是内容
    return {
      next: function() {
        return {
          value: allData[index],
          done: index ++ >= allData.length
        }
      }
    }
  }
}

for (const iterator of todos) {
  console.log(iterator);
}