function * test() {
  console.log(100, true);
  return 100;
}

const result = test();
// 默认不会执行，只有调用 next 方法才会执行，根据 next 返回的结果可以看出来他也实现了迭代器
console.log(result); // Object [Generator] {}
console.log(result.next()); // { value: 100, done: true }


function * foo() {
  console.log('a');
  yield 100;
  console.log('b');
  yield 200;
  console.log('c');
  yield 300;
}

const newResult = foo();

// 调用一次才会执行一次，每次都只会执行到 yield 关键字这里
console.log(newResult.next()); // => { value: 100, done: false }
console.log(newResult.next()); // => { value: 200, done: false }
console.log(newResult.next()); // => { value: 300, done: false }
console.log(newResult.next()); // => { value: undefined, done: true }

// 生成器函数会自动返回一个生成器对象，我们调用这个生成器对象的 next 方法才会让函数开始执行，在执行的时候如果碰到了 `yield` 关键字那么就会停止执行，且 `yield` 的值会被作为 next 的结果返回，继续调用 `next` 的话函数会在停止的位置继续执行，周而复始，一直到函数执行完毕。

const todos = {
  one: ['a', 'b', 'c'],
  two: ['d', 'e'],

  // 使用 generator 实现内部的迭代器
  [Symbol.iterator]: function *() {
    const allData = [...this.one, ...this.two];
    for (const val of allData) {
      yield val
    }
  }
}

for (const iterator of todos) {
  console.log(iterator);
}

console.log(Math.pow(2, 10));
console.log(2 ** 10);

const newobj = {
  a: 12,
  b: 13
}

console.log(Object.values(newobj));

for (const [key, val] of Object.entries(newobj)) {
  console.log(key, val);
}

const taozi = {
  name: 'taozi',
  age: '30',
  gender: '男'
}
for (const [key, val] of Object.entries(taozi)) {
  console.log(`${key.padEnd(16, '-')}|${val.padStart(6, '*')}`);
}

/**
   name------------|*taozi
   age-------------|****30
   gender----------|*****男
 */