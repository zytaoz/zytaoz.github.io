# 函数式编程
:::tip 定义
函数式编程其实就是对运算过程的抽象。
:::

## 前置知识
- 函数是一等公民，在`javascript`中，函数可以以任何形式存在。

### 函数式编程的优点都有哪些？
`优点`
- 可以缓存非常耗时的函数操作。（这里需要写一个事例）
- 测试方便。
- 支持并行处理。


## 高阶函数
前面说过，函数是一等公民，函数可以以任何形式存在，一个变量可以指向函数，一个函数可以接受一个变量作为参数，也可以返回一个变量（这个变量可能就是一个函数）。那也就是说 **一个函数也可以接受另一个函数作为参数或者返回另一个函数** ，这样的函数，就叫做高阶函数。
> 这样说起来有点绕啊，需要考虑一下是不是有更通俗的方式来表达。

## 闭包
[之前的笔记](/web/basis/closure.html#闭包)
::: details 什么是闭包
闭包是一种特殊的函数，他可以把一个函数作为参数传递进来，或者把函数作为返回值返回。闭包其实就是对作用域的控制，最主要的特征就是可以在外部作用域访问一个函数的内部变量。
:::


闭包这里除了之前理解的传统的闭包，老师讲述了一种之前没有见过的闭包事例，虽然很简单，但是实用意义比较大，这里做一个记录。（其实就是说明之前对闭包的理解并没有很到位）

:::tip 需求点
现在有一个需求，给某某班级的某某小朋友发糖果，按照之前传统的思路，就是新建一个函数然后接受两个参数，一个是班级一个是学名。其实这里有一个前提条件，一个班级是有很多个小朋友组成的，所以这里就可以先去生成一个班级，然后返回一个函数并接受学名（闭包）。
:::
``` javascript
function classRoom(classnumber) {
  return function(name) {
    return `给${classnumber}班的${name}小朋友发糖果`;
  }
}

// 生成两个班级
const classRoom1 = classRoom(1);
const classRoom2 = classRoom(2);

// 根据班级生成两个小朋友
const wxm = classRoom1('王小明');
const lxh = classRoom2('李晓红');
console.log(wxm); // => 给1班的王小明小朋友发糖果
console.log(lxh); // => 给2班的李晓红小朋友发糖果
```
## 纯函数
纯函数就是说同样的输入始终就是同样的输出，并且没有副作用。

函数式编程不会保留计算时候的结果，所以变量是不可变的就是所谓的纯函数。

如下例子，无论在何时何处执行该函数，只要传入的变量都是一样的那么返回的值始终也都是一样的，那么这种函数就可以称之为纯函数。
``` javascript
function sum(a, b, c) {
  return a + b + c;
}

sum(1, 2, 3); // => 6
sum(1, 2, 3); // => 6
```
纯函数是没有副作用的，具有副作用的函数也不叫纯函数。
> 该怎么理解 `副作用` 这个词？是指不好的作用还是指除主要作用外的辅助作用？
### 副作用的来源都有哪些
- 配置文件
- 数据库
- 用户的输入
- 随机数
- 日期
## 柯里化
::: tip 定义
当一个函数接受多个参数的时候，我们可以先传给他一个参数来调用他（刚开始传的这个参数是不会变化的），然后返回一个函数，这个返回的函数再接收一个函数，最终返回结果（这个看起来不就是上面的闭包吗）。（看不懂没有关系，继续往下看事例）
:::
### lodash 中的柯里化是怎么使用的
**变更一下小朋友发糖果的例子然后使用 lodash 实现柯里化**
``` javascript {17,24,28,29}
const _ = require('lodash');

/**
 * 给小朋友发糖果
 * @param {number} classnumber 班级
 * @param {string} name 姓名
 * @returns 结果
 */
function candyKids(classnumber, name) {
  return `给${classnumber}班的${name}小朋友发糖果`;
}

// 一般情况下要传两个参数
const wxm = candyKids(1, '王小明'); // => 给1班的王小明小朋友发糖果

// 使用 lodash 的 curry 方法柯里化 candyKids 函数
const curryClass = _.curry(candyKids)

// 柯里化后的 candyKids 函数可以继续接受两个参数
const zxr = curryClass(3, '赵小冉');
console.log(zxr); // => 给3班的赵小冉小朋友发糖果

// 可以接受一个参数，返回一个新的函数，然后将第二个参数传递给返回的这个新函数。
const lxh = curryClass(2)('李晓红');
console.log(lxh); // => 给2班的李晓红小朋友发糖果

// 优化上面的写法，可以将班级缓存下来，提高复用
const class1 = curryClass(1);
const wxm = class1('王小明');
console.log(wxm); // => 给1班的王小明小朋友发糖果
```
### 柯里化的好处
> 复习的时候，需要结合上面的例子来看，这样能更加容易理解一些。
- 柯里化可以将原本只能多个参数的函数，变成接受任意个参数的函数。
- 可以将常用的函数缓存下来，如上面的 `class1` 是可以重复使用的。
- 提高函数粒度，在函数式编程中有利于函数进行组合。

**把两个纯函数使用柯里化组装在一起使用**
``` javascript
// 使用多个纯函数加上函数柯里化来实现一个URL检查功能。
const _ = require('lodash');

// 首先定义一个基础的字符串校验函数，并且把函数柯里化
const checkString = (reg, str) => str.match(reg);
const curryCheckString = _.curry(checkString);

// 定义两个方法函数，查找空格和查找数字
const findSpace = curryCheckString(/\s+/g);
const findNumber = curryCheckString(/\d+/g);

// 查找数组里面的方法，并且柯里化
const checkArrFunc = (func, array) => array.filter(func);
const curryCheckArrFunc = _.curry(checkArrFunc);

// 定义两个查找数组内指定参数的方法
const findArraySpace = curryCheckArrFunc(findSpace);
const findArrayNumber = curryCheckArrFunc(findNumber);

console.log(findSpace('hello world')); // => [' ']
console.log(findNumber('hello 123')); // => ['123']
console.log(findArraySpace([' ', '12'])); // => [' ']
console.log(findArrayNumber([' ', '12'])); // => ['12']
```
> 代码确实是自己写的，也能看懂里面的意思，但是很不熟练。有一些方法平时没有这么用过，这里会感觉有些别扭，比如数组的 `filter` 方法，平时都是面向过程的编程方式，是直接把函数写在里面的，没有使用过这种方式去多处引用，会感觉有点绕，需要仔细的捋一下才能明白含义。主要原因还是不熟悉函数式编程吧。

### 如何手动实现一个柯里化方法
老师实现的思路很好，可以按照需求来完成具体功能。
- 新的 `curry` 函数会接受一个函数并且返回一个函数
- 返回的这个函数也会接受参数，且参数数量不一定等于接受函数的数量
- 如果小于就返回一个新的函数，新函数再将接受函数的参数和返回函数的参数合并在一起，交给返回函数进行递归
- 如果不小于就直接将返回函数的参数放入接受函数中开始调用，并返回调用结果

``` javascript {10}
function myCurry (func) {
  // curry 接受一个函数，并且返回一个函数，返回的这个函数也接受参数
  return function curried(...arges) {
    if (arges.length < func.length) {
      // 如果返回函数的参数数量小于接受函数的参数数量，那么就返回一个新的函数
      return function() {
        // 新的函数要把返回函数的参数和接受函数的参数合并在一起，然后重新放进返回函数内进行递归调用
        // 并且将递归的结果返回出去
        // 两个数组合并出来的是一个新的数据，但是返回函数接受的不是数组，所以需要把他拆分开来
        return curried(...arges.concat(Array.from(arguments)));
      }
    }
    // 如果返回函数的参数大于等于接受函数的函数，那么就直接把返回函数的参数放进接受函数内去执行他，并返回执行的结果
    return func(...arges);
  }
}
```
> 这里是需要反复回来看的，就和深拷贝的道理一样，只有明白原理才能信手拈来。死记硬背只能转头就忘。

## 函数组合
::: tip 定义
函数式编程要求尽可能的一个函数只做一件事情，在需要一个比较复杂的需求的时候，就需要把很多个小粒度的函数组合成一个大的函数。这样的组合就叫做函数组合。
:::
**函数组合的概念和特征**
- 函数组合就像是年轮，从里到外一圈一圈的嵌套。（老师在这里使用了洋葱来举例，换成年轮是为了避免和 `koa` 的洋葱模型概念混淆）
- 函数组合可以帮助我们把细粒度的函数组合成一个功能完善的函数。
- 因为粒度低，所以调试会很方便。
- **函数组合里面的函数只允许接受一个参数。**
- **函数组合都是从右往左来执行的**

``` javascript
// 函数组合，一个简单的，接受两个函数的函数组合
function compose(fn1, fn2) {
  return function(val) {
    return fn1(fn2(val))
  }
}

/**
 * 获取到函数的最后一个数字，这里为了演示函数组合，把这个操作分成两个步骤
 * 1、把数组反转
 * 2、获取数组第一位
 */
const reverse = arr => arr.reverse();
const first = arr => arr[0];
// 先反转再获取第一个
const newCompose = compose(first, reverse);
console.log(newCompose([1, 2, 3, 4])); // => 4

// 使用 lodash 中的 flowRight 方法
const _ = require('lodash');
// 把指转换成大写
const toUpper = str => str.toUpperCase();

const newToUpperFunc = _.flowRight(toUpper, first, reverse);
console.log(newToUpperFunc(['one', 'two', 'three'])); // => THREE
```

### 手动实现一个函数组合的方法
**分析**
- 参数数量不固定
- 返回是一个函数
- 接受的参数都是纯函数
- 从右到左执行接受的函数

> 关键字是数组的方法 [reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)，其他的都不难，关键就是这个 `reduce`。
``` javascript
// 手动实现一个函数组合方法

// 函数组合方法接受多个参数
function compose(...args) {
  // 函数组合方法会返回一个函数，返回的函数同时会接受一个参数，这个参数是初始值
  return function(val) {
    // 反转接受到的参数，然后使用 reduce 方法把函数分别传入来执行
    return args.reverse().reduce(function(t, f) {
      return f(t)
    }, val)
  }
}

const comToUpperFunc = compose(toUpper, first, reverse);
console.log(comToUpperFunc(['one', 'two', 'three']));
```
### 结合律
函数组合都必须要符合结合律
::: tip 什么叫结合律
假设一个函数组合是由三个子函数组成，那他的三个子函数要可以按顺序自由组合，比如：正常的函数组合是 1、2、3 这样去执行，那 1、2 可以放在一起执行，得到的值可以再传入 3 执行；也可以 1 执行得到的值，传入由 2、3 组合的函数组合。
:::
> 写事例
``` javascript
// 结合律
const _ = require('lodash');

const fn1 = _.flowRight(_.toUpper, _.first, _.reverse);
const fn2 = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse);
const fn3 = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse));

console.log(fn1(['one', 'two', 'three'])); // => THREE
console.log(fn2(['one', 'two', 'three'])); // => THREE
console.log(fn3(['one', 'two', 'three'])); // => THREE
```
### 如何进行调试
函数组合是由多个子函数拼接在一起的，那就可以在需要进行调试子函数后，再插入一个调试函数，这个函数只是打印上一个函数生成的值，然后把他返回出去，供下一个函数使用。
> 写事例
``` javascript
// 函数组合调试
const _ = require('lodash');

function log(val) {
  console.log(val);
  return val;
}

const fn4 = _.flowRight(_.toUpper, _.first, log, _.reverse);
fn4(['one', 'two', 'three']); // => [ 'three', 'two', 'one' ]
```

### 子函数包含多个参数该怎么处理
把子函数柯里化，从需要接受多个参数，拆分成多个接受一个函数，然后返回函数的子函数。
> 写事例
``` javascript
// 函数组合的子函数有多个参数
const _ = require('lodash');

function log(tag, val) {
  console.log(tag, val);
  return val;
}

// 函数组合里面的函数只能是一元函数（只能接受一个参数），所以这里使用函数的柯里化，把多元函数变为一元函数
const split = _.curry((sep, str) => _.split(str, sep));
const join = _.curry((sep, arr) => _.join(arr, sep));
const map = _.curry((fn, arr) => _.map(arr, fn));
const newLog = _.curry((tag, val) => log(tag, val))


// 这里的 join('-') 和 split(' ') 都是已经柯里化以后的函数，他已经接受一个参数，执行之后就返回了一个一元函数，这个一元函数刚好放在函数组合里面使用
const fn1 = _.flowRight(join('-'), newLog('map 之后'), map(_.toLower), newLog('split 之后'), split(' '));

console.log(fn1('HELLO WORLD'));
/**
 * split 之后 [ 'HELLO', 'WORLD' ]
 * map 之后 [ 'hello', 'world' ]
 * hello-world 
 */
```

#### 直接使用 `lodash` 中的 `lodash/fp` 模块
- lodash 中的 fp 模块提供了对函数式编程比较友好的方法
- 数据滞后，函数在前面

> 写事例
``` javascript
// lodash/fp 模块的使用
const fp = require('lodash/fp');
// lodash 中的 fp 模块都是已经柯里化后的函数，如果是有多个参数的化，都是函数优先，数据滞后的方式，可以直接使用。
const fn2 = _.flowRight(fp.join('-'), fp.map(_.toLower), fp.split(' '));
console.log(fn2('HELLO WORLD')); // => hello-world
```
### Point Free 模式
- 不需要制定处理的数据
- 只要合成运算的过程
- 需要定义一些辅助的基本运算函数
> 其实就是函数组合啊，写函数的时候不要关心传进来的是啥，只是拆分定义多个低粒度纯函数，然后把他们组装在一起返回一个新的大函数。

## Functor (函子) 
::: tip 
函子这一块好难啊
:::

这里的函子是用来控制纯函数中的副作用。
- 函子可以写成一个类。
- 函子里面必须有一个 map 方法，他接受一个函数（必须是纯函数），并且返回一个新的函子类，他接受的这个函数，接受一个参数，这个参数就是函子内部的值。
- 因为函子的map方法返回了一个新的函子，所以可以使用链式调用。

**下面是老师讲义的内容**
- 函数式编程的运算不直接操作值，而是由函子完成。
- 函子就是一个实现了 map 契约的对象（所有的函子都有一个 map 方法）
- 我们可以把函子想像成一个盒子，这个盒子里面封装了一个值
- 想要处理盒子中的值，我们需要给盒子的 map 方法传递一个处理值的函数，这个函数必须是纯函数，由这个函数对值进行处理。
- 最终 map 方法返回一个包含新值的盒子，就是 new 一个新的函子。

> 以下为事例，代码都能看得懂，不明白的就是，这个东西到底有啥用。
``` javascript
// 函子
class functor {

  // 建立一个静态方法，他的作用是直接 new 一个函子，让外面可以直接使用
  static of(value) {
    return new functor(value);
  }

  // 函子会接受一个值
  constructor(value) {
    this.value = value;
  }

  // 函子会返回一个 map 方法，map 方法会接受一个函数，并返回一个新的函子
  map(fn) {
    return functor.of(fn(this.value));
  }
}

// 可以直接使用静态方法来调用函子
const fn1 = functor.of(5).map(x => x * x).map(x => x - 1);
console.log(fn1);
```
**扫盲补充**：`es6 class` 中的静态方法 `static` 可以直接访问，不用 `new` [静态方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes#静态方法)


### May Be 函子

- May Be 函子可以处理函子的值为空的情况
- 但是 May Be 函子在链式调用的时候无法定义异常的位置，调试会很麻烦

> 写事例
``` javascript
MeyBe {
  static of(value) {
    return new MeyBe(value);
  }

  constructor(value) {
    this.value = value;
  }

  map(fn) {
    // 在执行函数之前判断一下值是否为空
    return this.isNothing() ? MeyBe.of(null) : MeyBe.of(fn(this.value));
  }

  isNothing() {
    // this.value == null 等同于 this.value === null || this.value === undefined
    return this.value == null;
  }
}

let val1 = MeyBe.of(1).map(x => x ++);
console.log(val1);
```

### Either 函子
Either 函子可以定位异常的位置，他就是直接定义两个函子，一个是正常处理数据的函子，另一个是处理异常的函子，处理异常的函子会直接把整个函子的 this 返回出来。
然后再定一个函数，使用 trycatch 来决定执行哪个函子，并且捕获异常。
> 写事例
``` javascript
// 二者选一的函子
class Left {
  static of(value) {
    return new Left(value);
  }

  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return this;
  }
}

class Right {
  static of(value) {
    return new Right(value)
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return Right.of(fn(this._value));
  }
}

function parseJSON (str) {
  try {
    return Right.of(JSON.parse(str));
  } catch (err) {
    return Left.of({ error: err.message })
  }
}

let r1 = parseJSON("{ name: 123 }")
let l1 = parseJSON('{ "name": 123 }')
console.log(r1); // => Left { value: { error: 'Unexpected token n in JSON at position 2' } }
console.log(l1); // => Right { _value: { name: 123 } }
```
> 为什么这里没有调用函子的 `map` 方法

### IO 函子
> IO 是指 input output，即输入输出。
- IO 函子通过上面说的 value 包装了一个函数，这个函数可能包含一些不是纯函数的函数。
- 但是 IO 函子本身是一个纯函数，他通过 map 函数返回传入的值，也就是 value，他是一个不纯的函数，而直接把这个不纯的函数出来交给用户自己去执行。
> 写的东西都能看懂，但是不知道有啥用。这个东西真的好难理解啊，主要是真的不知道有什么用，没有办法结合有实际意义的例子去理解。
``` javascript
// IO 函子
const fp = require('lodash/fp');

class IO {
  static of(value) {
    return new IO(function() {
      return value;
    })
  }

  constructor(fn) {
    this.value = fn;
  }

  map(fn) {
    return new IO(fp.flowRight(fn, this.value));
  }
}

// 这里面的node方法是一个不纯的操作，但是IO函子还是纯函数
let r = IO.of(process).map(p => p.execPath);
console.log(r.value());
```

### task 函子
使用 folktale 的 task 函子来处理异步任务
::: tip
task 函子用来处理异步任务
:::

### Pointed 函子
- pointed 函子就是实现了静态方法的函子，就和上面的 of 静态方法是一样的。
- of 方法就是为了避免使用 new 来创建对象，按照上面的理解，of 静态方法会把值放到一个新的函子中。（这里用文字很难描述，最好的还是等代码全部补全之后）

### Monad 单子函子
- 这他吗都是啥

- 如果碰到两个函子嵌套的情况，那么读取他返回的值会比较麻烦，这时候就可以在函子内部定义一个 join 方法，这个 join 方法会直接返回函子的 value

<br>

::: danger
函子这一块有很多问题，老师讲的太复杂了，完全看不懂，需要从函子最开始的位置重新开，然后全部实现一下，也许就能明白了。
:::

## 刻意练习
- 手动实现柯里化函数
- 手动实现函数组合函数
- 柯里化与函数组合放在一起使用（子函数有多个参数）
- 函子！函子！！函子！！！完全没看懂 😭

## 参考资料
- [lodash](https://www.lodashjs.com)
- [folktale](https://folktale.origamitower.com)
- [class 静态方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes#静态方法)
- [reduce 方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)