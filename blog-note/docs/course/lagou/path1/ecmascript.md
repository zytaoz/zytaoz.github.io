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
```js
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
```js
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

## 字符串扩展

### 模板字符串
新增使用反引号来写字符串模板，相对于之前的字符串拼接会简单和方便。

#### 带标签的模板字符串
```js
const name = 'tzy';
const gender = true;

function func1(strings) {
  // 如果直接输出传递进来的参数，会返回一个基于字符串模板进行分割的数组
  return strings;
}
const result1 = func1`hi, ${name} is a ${gender}`;
console.log(result1); // => [ 'hi, ', ' is a ', '' ]


function func2(strings, name, gender) {
  console.log(name); // => 字符串模板的第一位，就是对应的 name => tzy
  console.log(gender); // => 字符串模板的第二位，就是对应的 gender => true
  return strings;
}
const result2 = func2`hi, ${name} is a ${gender}`;
```

实际的应用
- 可以在 `tag` 函数内部去检查传递的字符串模板，然后根据传进来的值做出一些相应的操作。
```js {5}
const name = 'tzy';
const gender = true;

function func3(str, name, gender) {
  gender = gender ? 'man' : 'woman';
  return str[0] + name + str[1] + gender + str[2]
}
const result3 = func3`hi, ${name} is a ${gender}`;
console.log(result3); // => hi, tzy is a man
```

### 其他扩展
- includes 判断字符串内是否有指定的内容
- startWith 判断字符串是否以指定内容开头
- endWith 判断字符串是否以指定内容结尾
> 感觉还是 `includes` 最有用，`includes` 可以做的事情其他两个不一定能做，但是其他两个能做的事情，`includes` 都能做。

## 函数扩展

### 参数默认值
- 函数定义的时候可以给形参一个默认值，不用像之前那样需要在内部进行判断了。
- 但是这个有默认值的形参必须是要在参数的最后面。否则无法有效果。
> 形参位置这个和记忆里面的功能不太一样，去查了一下原来是已经修复了[位于默认参数之后非默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters#%E4%BD%8D%E4%BA%8E%E9%BB%98%E8%AE%A4%E5%8F%82%E6%95%B0%E4%B9%8B%E5%90%8E%E9%9D%9E%E9%BB%98%E8%AE%A4%E5%8F%82%E6%95%B0)

```js
function fn2(a = 1, b) {
  console.log(a, b);
}

fn2(); // => 1 undefined
fn2(2); // => 2 undefined
```

### 剩余参数
- 对于未知数量的参数，可以使用剩余操作符`...`。
- 因为是获取剩下的所有参数，所以只能在形参的最后一位使用一次。
```js {1}
function func(a, ...b) {
  console.log(a); // => 1
  console.log(b); // => [ 2, 3, 4 ]
}

func(1, 2, 3, 4);
```
### 箭头函数
- 省略 `function` 关键字
- 不写花括号是直接返回
- 箭头函数的 `this` 指向不会被改变，就是函数所处作用域的 `this`
### 展开操作符
- 在展开数组的时候可以使用`...`去展开一个数组
```js
const arr = [1, 2, 3, 4];
console.log(...arr); // => 1 2 3 4

function fn1(val) {
  console.log(...val); // => 1 2 3 4
}
fn1(arr);
```

## 对象扩展

### 对象字面量扩展
- `key` 和 `value` 如果一样的话，可以省略 `value`
- 计算属性名，可以使用方括号来声明一个动态的 `key`
> 计算属性名原来是新特征，我还一直以为是之前就有的。

### Object.assign
- 接受多个对象参数，会将后面的对象合并到第一个对象里面去。
- 返回的值和第一个对象是同一个对象。
- 可以实现**浅拷贝**（仅能修改第一层的值类型，详见下面代码）
- 关于拷贝的问题，文档里面有比较详细的介绍[Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
```js
const obj1 = {
  a: 123,
  b: 234
};

const obj2 = {
  c: 345,
  b: 456
}

const obj3 = Object.assign(obj1, obj2);
console.log(obj1); // => { a: 123, b: 456, c: 345 }
console.log(obj3); // => { a: 123, b: 456, c: 345 }
console.log(obj1 === obj3); // => true

// 这是深拷贝吗？
const obj4 = Object.assign({}, obj2);
console.log(obj4); // => { c: 345, b: 456 }
console.log(obj2); // => { c: 345, b: 456 }
console.log(obj4 === obj2); // => false

// 实验深拷贝
const obj5 = {
  name: 'lambortao',
  age: 29,
  address: {
    city: '上海',
    area: '杨浦'
  }
}

// 不是深拷贝，只是第一层级如果是值类型就不会被新的赋值所影响，但是引用类型就会继续有影响。
const obj6 = Object.assign({}, obj5);
obj5.age = 30;
obj5.address.area = '浦东新区';
console.log(obj5); // => { name: 'lambortao', age: 30, address: { city: '上海', area: '浦东新区' } }
console.log(obj6); // => { name: 'lambortao', age: 29, address: { city: '上海', area: '浦东新区' } }
```

### Object.is
对比两个值是否相等，使用场景有限，仅作为了解。
```js
console.log(+0 === -0); // => true
Object.is(+0, -0); // => false

console.log(NaN === NaN); // => false
Object.is(NaN, NaN); // => true
```

## Proxy
这是一个很牛逼的东西，他可以监听对象的修改和读取。
```js
const obj = {
  name: 'tzy',
  age: 30
}

/**
 * new 一个 Proxy，接受两个参数
 * 第一个是需要监听的对象
 * 第二个也是一个对象，这个对象有两个方法，get方法会监听到第一个对象的读取，set 方法会监听到第二个对象的写入
 * get 方法接受两个参数，第一个是被监听的对象，第二个是访问的属性
 * set 方法接受三个参数，第一个是被监听的对象，第二个是操作的属性，第三个是操作属性的值
 */
const proxyObj = new Proxy(obj, {
  get(target, key) {
    return key in target ? target[key] : 'default val';
  },
  set(target, key, value) {
    // 可以在写入之前做些数据校验
    target[key] = value;
  }
})

console.log(proxyObj.name); // => tzy
proxyObj.gender = '男';
console.log(proxyObj); // => { name: 'tzy', age: 30, gender: '男' }

// 监听数组
const arr = [];
const proxyArr = new Proxy(arr, {
  set(target, index, val) {
    console.log(target, index, val); // => [] 0 100
    target[index] = val;
    return true;
  }
})

proxyArr.push(100); // => [ 100 ] length 1
console.log(proxyArr); // => [ 100 ]
```

### 和 Object.defineProperty 对比
- `proxy` 比 `Object.defineProperty` 能监视更多的操作，具体看文档[Proxy#一个完整的_traps_列表示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#一个完整的_traps_列表示例)
- `proxy` 可以监听数组
- 无侵入的方式监听了对象

## Reflect
- 他是个静态方法，不能使用 `new` 关键字
- 他的方法和 `proxy` 一模一样
- `proxy` 在内部其实也就是使用了他的方法
- 按照老师想法，这个东西的意义就是为了统一语法，如下例子
```js
const obj = {
  name: 'tzy',
  age: 30
}

/**
 * 老的操作方式
 * 同样是对对象进行操作，操作的方式却是千奇百怪
 */
console.log('name' in obj);
console.log(delete obj.name);
console.log(Object.keys(obj));

/**
 * 使用 reflect，操作看起来会规范非常多
 */
console.log(Reflect.has(obj, 'name'));
console.log(Reflect.deleteProperty(obj, 'age'));
console.log(Reflect.ownKeys(obj));
```
在实际的使用中，尽量去使用 `Reflect` 的方式去代替老的操作方式。他还有很多方法，详见文档：[Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

## Promise
详见 [Promise](/course/lagou/path1/async)

## Class
- `Class` 更新了传统的在函数原型上添加方法的方式。
- `Class` 其实就是 `function` 的语法糖。

```js
class test {}
console.log(test instanceof Function); // => true
```

### static 静态方法
> 讲函子那里使用了不少这个方法。
- 使用 `static` 添加静态方法
```js {10-12}
class man {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name);
  }

  static create(name) {
    return new man(name);
  }
}

// 静态方法可以直接访问，且他的 this 指向是的实例自己
const tzy = man.create('tzy');
console.log(tzy);
```

### extends 继承
- 使用 `extends` 去继承 `class`
- 继承的函数会继承父类的所有方法和对象
> 这个用的比较多，就不写事例了

## Set 数据结构
- 可以被成为【集合】。
- 他和数组很像。
- 但是他内部不允许有重复的值。
- 比较常用的场景，可以用来给数组去重。

```js
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
```

## Map 数据结构
- 和对象很像，但是对象的 `key` 只能是字符串，`Map` 的 `key` 可以是任意值，甚至是一个对象。
```js
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
```

## Symbol 数据类型
- 他会创建一个唯一的值
- 目前他的作用主要是给对象生成一个独一无二不会冲突的 `key`
- 他可以接受一个字符串用来区分不同的 `symbol`
- 使用 `for` 静态方法可以创建两个一样的 `symbol`
- 使用 `symbol` 定义的对象属性是无法通过传统的方式去获取的，只能通过 `Object` 的 `getOwnPropertySymbols` 方法，这个特性使得 `symbol` 特别适合作为对象的私有属性。
```js
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

// 如果一定要获取到 symbol 属性的话，需要使用内置方法，这就就能获取到内部的所有symbol的属性
const [d] = Object.getOwnPropertySymbols(newobj);
console.log(d); // => Symbol()
console.log(newobj[d]); // => symbol value
```

## for...of
- 目前的遍历方式都有局限性的，例如 `for` 遍历数组， `forin` 遍历键值对。而 `forof` 可以遍历任何数据结构。
- 使用 `break` 可以跳出循环。
- 文档里面有很多东西：[for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)

### Iterator 迭代器
- 所有能被 `for...of` 循环的数据结构，都要在内部实现 `iterator` 的接口。 
- `iterator` 会挂载一个 `Symbol.iterator` 的方法。
- `Symbol.iterator` 返回一个 `next` 的方法。
- 在调用这个 `next` 的方法的时候，会返回一个对象，其中 `value` 就是当前迭代的值，`done` 就是是否迭代完毕。`for...of` 就是这样对数据结构进行的遍历。
- 文档：[iterator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
```js
const arr = [1, 2, 3];

const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next()); // => { value: 1, done: false }
console.log(arrIterator.next()); // => { value: 2, done: false }
console.log(arrIterator.next()); // => { value: 3, done: false }
console.log(arrIterator.next()); // => { value: undefined, done: true }
```

### 对象内部实现迭代器
- 内部实现迭代器的意义就是对外提供一个统一的迭代结构，让外部不用去关心内部的数据结构。
- 其实按照我们平时的方式也是可以实现一个类似的方法的，但是使用内部实现迭代器的话就可以从语言层面去统一迭代方式，我们所要关心的就只是怎么在对象里面去实现一个迭代器就好了。
> 这个东西有点绕，需要多看看。

::: tip 如何在对象内部实现迭代器
- 首先需要在对象内部实现 `iterable`，即**可迭代接口**，实现可迭代接口就意味着这内部会有个返回迭代器的 `Symbol.iterator` 方法。（第2行）
- `Symbol.iterator` 方法他实现了 `iterator`，即**迭代器接口**，实现迭代器接口，就说明他内部有一个 `next` 方法用于迭代。（第13行）
- `next` 返回了一个对象，这个对象实现的是 `iterationResult`，即**迭代结果接口**，实现了 `iterationResult` 就意味着他内部必须要有一个 `value` ，用来接受当前迭代的值，值可以为任意类型，还有一个 `done` 属性，用来表示当前迭代是否结束。（第16行）
:::

```js {2,13,16}
// todos 实现了可迭代接口，叫做 iterable，实现了可迭代接口就意味着内部必须要有一个会返回迭代器的Symbol.iterator 方法
const todos = {
  one: ['a', 'b', 'c'],
  two: ['d', 'e'],

  // 实现内部的迭代器
  [Symbol.iterator]: function() {
    // 首先将内部的数据都取出来
    const allData = [...this.one, ...this.two];
    // 然后维护一个index
    let index = 0;
    // 返回的这个对象，他实现了迭代器接口，叫做 iterator，实现 iterator 就意味着内部要有一个 next 方法
    return {
      next: function() {
        // 最后 next 内部返回的这个迭代结果对象，叫做 iterationResult ，实现了 iterationResult 就意味着他内部必须要有一个 value ，用来接受当前迭代的值，值可以为任意类型，还有一个 done 属性，用来表示当前迭代是否结束
        return {
          value: allData[index],
          done: index ++ >= allData.length
        }
      }
    }
  }
}

for (const iterator of todos) {
  console.log(iterator); // => abcde
}
```

## Generator 生成器
- 他最主要的功能是用来解决异步编程回调嵌套过深的情况
- `generator` 内部也实现了迭代器。
- 执行过程
 - 生成器函数会自动返回一个生成器对象，我们调用这个生成器对象的 `next` 方法才会让函数开始执行
 - 在执行的时候如果碰到了 `yield` 关键字那么就会停止执行,且 `yield` 的值会被作为 `next` 的结果返回
 - 继续调用 `next` 的话函数会在停止的位置继续执行，周而复始，一直到函数执行完毕。
```js
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
```

### 应用场景
- 重写上面的那个对象内部实现的迭代器
```js {10}
const todos = {
  one: ['a', 'b', 'c'],
  two: ['d', 'e'],

  // 使用 generator 实现内部的迭代器
  [Symbol.iterator]: function *() {
    const allData = [...this.one, ...this.two];
    for (const val of allData) {
      // yield 关键字会暂停循环，并且返回 next 方法的返回值
      yield val
    }
  }
}

for (const iterator of todos) {
  console.log(iterator);
}
```
## ES2016
数组的 `includes` 方法竟然是 `ES2016` 才实现。

### 指数运算符 （幂）
```js
// 计算 2 的 10 次方
// 老方法
console.log(Math.pow(2, 10)); // => 1024
// 指数运算符 
console.log(2 ** 10); // => 1024
```
## ES2017
### Object.values()
获取对象所有的值
```js
const newobj = {
  a: 12,
  b: 13
}

console.log(Object.values(newobj)); // => [ 12, 13 ]
```

### Object.entries 
把对象的键值对按照数组的形式返回，这样就可以直接使用他来转换对象然后使用 `forof` 循环对象了
```js
const newobj = {
  a: 12,
  b: 13
}

for (const [key, val] of Object.entries(newobj)) {
  console.log(key, val);
}
```

### Object.getOwnPropertyDescriptor
[getOwnPropertyDescriptor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

### padStart
这两个东西挺有意思，用指定字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。
- [padStart](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
- [padEnd](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

```js
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
```

### 在函数参数最后一个可以加逗号
这个东西就和数组对象最后一个写逗号一样，存粹是为了写起来方便，没有其他的意义。

### Async Await
[async](/course/lagou/path1/async.html#async-和-await)

## 参考文档
- [函数的形参设置默认值时-位于默认参数之后非默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters#%E4%BD%8D%E4%BA%8E%E9%BB%98%E8%AE%A4%E5%8F%82%E6%95%B0%E4%B9%8B%E5%90%8E%E9%9D%9E%E9%BB%98%E8%AE%A4%E5%8F%82%E6%95%B0)
- [Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Proxy#一个完整的_traps_列表示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#一个完整的_traps_列表示例)
- [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
- [for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
- [iterator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)