# ECMAScript 新特性
::: tip 前言
这章的东西比较常用。
:::

## ECMAScript 和 JavaScript 的关系
`ECMAScript` 只提供基础语法，`JavaScript` 是在 `ECMAScript` 的基础上做了扩展。
- 浏览器环境扩展了 `DOM` 和 `BOM` 操作。
- `Node` 环境扩展了其他的语法。

**ES6 就是 ES2015**

> `nodemon` 这个小工具可以监听本地代码的改变来自动刷新

## let 和 const
- 块级作用域，就是花括号包起来的位置。
- 禁用了变量提升，不可以先使用再声明。
- `const` 是常量。这个常量禁止修改，但是这个禁止修改不是不能修改常量中的内部属性，而是禁止指向一个新的内存地址。
  - 如果使用 `const` 声明了一个值类型，那么就无法修改。
  - 如果使用 `const` 声明了一个引用类型，那可以修改引用类型内的属性，而不能修改常量本身。
- 弃用 `var`，除非确定是需要修改值的变量使用 `let` 声明，其他的全部使用 `const`。

## 解构
> 这个东西在用的时候一直都很健忘，总是想不起来去使用。

### 数组的解构示例
``` javascript
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
```

### 对象的解构
区别于数组的解构，对象没有下标，所以要通过 `key` 来解构。
``` javascript
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
```