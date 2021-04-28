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
- 该函数会返回一个函数。
- 返回的函数可以接受参数。
- 该函数可以接受多个函数作为变量。
- 如果传入的变量大于等于所需的变量，那么就直接返回函数运行结果。
``` javascript
// 手动实现柯里化方法
```
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

### 结合律
函数组合都必须要符合结合律
::: tip 什么叫结合律
假设一个函数组合是由三个子函数组成，那他的三个子函数要可以按顺序自由组合，比如：正常的函数组合是 1、2、3 这样去执行，那 1、2 可以放在一起执行，得到的值可以再传入 3 执行；也可以 1 执行得到的值，传入由 2、3 组合的函数组合。
:::
> 写事例
``` javascript
// 结合律
```

### `lodash` 中的 `flow` 和 `flowRight` 方法

### 手动实现一个函数组合的方法
> 关键字是数组的方法 [reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
``` javascript
// 手动实现函数组合方法
```

### 如何进行调试
函数组合是由多个子函数拼接在一起的，那就可以在需要进行调试子函数后，再插入一个调试函数，这个函数只是打印上一个函数生成的值，然后把他返回出去，供下一个函数使用。
> 写事例
``` javascript
// 函数组合调试
```

### 子函数包含多个参数该怎么处理
把子函数柯里化，从需要接受多个参数，拆分成多个接受一个函数，然后返回函数的子函数。
> 写事例
``` javascript
// 函数组合的子函数有多个参数
```

#### 直接使用 `lodash` 中的 `lodash/fp` 模块
> 写事例
``` javascript
// lodash/fp 模块的使用
```

### Point Free 模式

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
- 函子就是一个实现了 map 契约的对象
- 我们可以把函子想像成一个盒子，这个盒子里面封装了一个值
- 想要处理盒子中的值，我们需要给盒子的 map 方法传递一个处理值的函数，这个函数必须是纯函数，由这个函数对值进行处理。
- 最终 map 方法返回一个包含新值的盒子，就是 new 一个新的函子。

> 写事例
``` javascript
// 定义一个基础的函子
```

es6 class 中的静态方法 static 可以直接访问，不用 new [静态方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes#静态方法)


### May Be 函子
May Be 函子可以处理函子里面的异常
但是 May Be 函子在链式调用的时候无法定义异常的位置，调试会很麻烦

> 写事例
``` javascript
// 定义一个可以处理异常的函子
```

### Either 函子
Either 函子可以定位异常的位置，他就是直接定义两个函子，一个是正常处理数据的函子，另一个是处理异常的函子，处理异常的函子会直接把整个函子的 this 返回出来。
然后再定一个函数，使用 trycatch 来决定执行哪个函子，并且捕获异常。
> 写事例
``` javascript
// Either 函子
```

### IO 函子
> IO 是指 input output，即输入输出。
IO 函子通过上面说的 value 包装了一个函数，这个函数可能包含一些不是纯函数的函数。但是 IO 函子本身是一个纯函数，他通过 map 函数返回的那个值，也就是 value 是一个不纯的函数，而直接把这个不纯的函数出来交给用户自己去执行。
> 写事例
``` javascript
// IO 函子
```

### task 函子
使用 folktale 的 task 来
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