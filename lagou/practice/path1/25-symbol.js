const a = Symbol();
const b = Symbol();
console.log(a === b); // => false

const name = Symbol();
const obj = {
  [name]: 'lambor',
  say() {
    return this[name];
  }
}

// 这时候就只能通过 say 方法去访问到 obj 内部的 name 了
console.log(obj.say()); // => lambor
console.log(obj[Symbol()]); // => undefined


// symbol 有一个 for 静态方法可以让我们生成两个相等的 symbol
// for 方法接受一个字符串，用来区分
console.log(Symbol.for(1) === Symbol.for(1)); // => true

// 如果传进去的不是字符串，会转换成字符串
console.log(Symbol.for(true) === Symbol.for('true')); // => true

// 内置对象的自定义接口
// 老师说他有用，但是我没体会到，看后续怎么讲吧
const obj1 = {};
console.log(obj1.toString()); // => [object Object]
obj1[Symbol.toStringTag] = 'lambor';
console.log(obj1.toString()); // => [object lambor]

// 普通的对象方法是无法获取 symbol 属性的，只能获取常规的属性
const newobj = {
  [Symbol()]: 'symbol value',
  foo: 'xxx'
};

// 只会打印 foo
for (const key in newobj) {
  console.log(key);
}
console.log(Object.keys(newobj)); // => [ 'foo' ]
console.log(JSON.stringify(newobj)); // => {"foo":"xxx"}

// 如果一定要获取到 symbol 属性的话，需要使用内置方法
const [d] = Object.getOwnPropertySymbols(newobj);
console.log(d); // => Symbol()
console.log(newobj[d]); // => symbol value