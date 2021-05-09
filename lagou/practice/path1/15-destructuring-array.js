// 基础赋值
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // => 1
console.log(b); // => 2
console.log(c); // => 3

// 单独赋值最后一个
const [, , d] = arr;
console.log(d); // => 3

// 三个点是解构的语法，只能用在最后一位
const [e, ...f] = arr;
console.log(e); // => 1
console.log(f); // => [2, 3]

// 被复制的长度不相等，会直接赋值为 undefined，相当于声明了没赋值。
const [g, h, i, j] = arr;
console.log(j); // => undefined

// 可以给默认值
const [k, l, m = 4, n = 5] = arr;
console.log(m); // => 3
console.log(n); // => 5

// 实际应用，拆解 url，使用哪一个就取哪一位就好了
const url = '/active/id/1';
const [o, p, q, r] = url.split('/');
console.log(o); // => 
console.log(p); // => active
console.log(q); // => id
console.log(r); // => 1