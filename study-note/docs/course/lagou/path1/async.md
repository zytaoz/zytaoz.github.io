# JavaScript 异步编程
## 写在前面
这篇都是常用的基础知识，掌握的相对较好。（相对函数式编程）

## 为什么会有异步
### 单线程
`JavaScript` 在设计的时候是可以修改 `DOM` 结构结构的，如果是多线程的话可能会导致在操作 `DOM` 结构的时候前后操作不一致从而出现混乱，所以就设计成了单线程语言。

### 异步的由来
如果 `JavaScript` 只是一门单纯的单线程语言，这时候在页面上出现了一个耗时不确定的操作，如网络请求，可能会导致页面卡住，无法进行下一步，这样肯定是不能接受的，所以就提出了**异步**这个概念。

## 同步和异步模式
### 同步
同步就是完全按照代码编写的顺序进行排队执行。

## 回调函数
::: tip 定义
回调函数是异步标准的基准，他衔接了异步函数执行完毕后的钩子，在异步函数条件触发后就会进入对应的回调函数开始执行。
:::

## 异步
**少废话，看东西**
<img :src="$withBase('/lagou/event-loop.jpg')">

这个东西如果理解了其实并不难。主要的概念就三个，一是**调用栈**，二是**消息队列**，三是**事件循环**。
- 正常情况下，同步代码都会在调用栈里面一条一条的执行，如果这时候碰到了一个异步函数，如 `setTimeout` 那就会把这个定时器放到 `web apis` 里面开始倒计时。这里的倒计时和同步代码会同时进行，并不会冲突。
- 在同步代码执行完毕后， `event loop` 即事件循环就会启动，**事件循环**的主要作用就是监听**调用栈**是否清空和**消息队列**中是否有等待放入**调用栈**的代码。
- 在定时器结束后，`web apis` 会把回调函数放到**消息队列**中，在**调用栈**清空后，**事件循环启**动，**事件循环**监测到**消息队列**中有**回调函数**，会将**回调函数**放到**调用栈**中执行，执行完毕后再去检查**消息队列**，以此循环。

### 问题点
 这里有一个小问题，就是老师的讲义中 `web apis` 中有一个 1.8s 和一个 1s 的定时器，其中 1s 的定时器内还有一个 1s 的定时器。按照我的理解，应该是外面 1s 的定时器会先定时结束被放到消息队列中，然后被事件循环放到调用栈中执行，然后执行的时候发现里面还有一个 1s 的定时器，再把内部的这个定时器放到 `web apis` 中开始倒计时。在此途中，1.8s 定时器时间到了也被放到消息队列中然后被事件循环派发到调用栈。而老师却说 1s 和 1.8s 的两个定时器会同时存在于消息队列，都执行完毕后才会将内部的那个 1s 放到 `web apis` 中进行下一步。

这里有什么问题？
- 在调用栈有未执行完毕的代码的时候，事件循环会继续吗？
  - 如果继续的话，老师讲的可能就有些问题，因为这样的话 1s 和 1.8s 不会同时存在于消息队列。
- 如果老师讲的是对的，1s 和 1.8s 同时存在，那么就会有一个新的问题，这时候如果 1s 内嵌套了一个 0.1s 的定时器，那么执行顺序就是 1s -> 1.8s -> 0.1s，但实际并不是这个样子的，0.1s 是在 1.8s 之前执行的。所以我偏向第一种解释，即 1s 会先执行。
## Promise 
::: tip 基础使用
`promise` 接受一个函数，这个函数接受两个参数 `resolve` 和 `reject` ，其中 `resolve` 是在异步函数得到了成功的反馈后执行的函数，`reject` 是在异步函数得到了失败反馈的时候执行的函数。
:::

### then
在 `promise` 返回的方法里，可以接受一个 `.then` 方法，该方法接受两个函数，第一个是 `resolve` 的回调，第二个是 `reject` 的回调。

### catch
在 `promise` 返回的方法里，还可以接受一个 `.catch` 方法，该方法接受一个函数，为 `reject` 的回调。

``` javascript
const promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve('成功');
  } else {
    reject('失败');
  }
})

promise.then(function(value) {
  console.log(value); // 成功
}, function(err) {
  console.log(err); // 失败
})

promise.then(function(val) {
  console.log(val);
}).catch(function(err) {
  console.log(err);
})
```
### 链式调用
就上面 `.catch` 就是链式调用。
::: tip 从哪里来？
每一个 `.then` 方法都是在为上一个 `.then` 方法添加异步状态明确后的一个回调函数。这里还可以手动返回一个 `promise` 对象。这样可以避免回调嵌套，解决回调地狱的问题。
:::

### 静态方法
#### promise.resolve()
快速创建一个 `resolve` 的 `promise` 对象。
- 传入普通的变量，会将这个变量作为返回的 `promise` 对象中的值返回出去。
- 传入的是一个 `promise` 对象，会将这个 `promise` 原封不动的返回出去。
``` javascript
promise.resolve('foo').then(val => {
  console.log(val); // => foo
})
```
#### promise.reject()
快速创建一个 `reject` 的 `promise` 对象。
``` javascript
promise.reject('error').catch(val => {
  console.log(val); // => error
})
```

## Promise 高级使用

### Promise.all()
::: tip
将多个 `primise` 对象合并成为一个去管理，他接受一个由 `promise` 对象组成的数组，等待所有的 `promise` 全部执行完毕后，返回一个新的 `promise` 对象，返回对象中的 `resolve` 方法中会接受到一个数组，是执行成功后的回调。

只有在传入的多个 `promise` 对象都执行成功后才会触发 `.then`，否则就触发 `.catch`。
:::

### Promise.rece()
::: tip
和 `promise.all` 的区别就是，`promise.all` 在执行完全部的 `promise` 后才会执行，`promise.rece` 会在第一个 `promise` 执行完毕后就触发执行。
:::

## Generator
这个东西好像用的不多，看文档吧。[Generator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)

## async 和 await
`generator` 的语法糖，最终的解决方案！
``` javascript {13-16}
function helloLagouPromise(str, time) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(str)
      }, time)
    } catch (error) {
      reject(error);
    }
  })
}

(async function () {
  const hello = await helloLagouPromise('hello', 10);
  const lagou = await helloLagouPromise('lagou', 10)
  const love = await helloLagouPromise('I ♥ U', 10)
  console.log(`${hello} ${lagou} ${love}`);
})();
```
## 刻意练习
多画一画异步的那个图，事件循环消息队列等多复习。
`promise` 的高级属性平时要多用。

## 参考资料
[Generator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)
[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)