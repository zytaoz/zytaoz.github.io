# 手写 Promise 源码

## 核心逻辑
- Promise 是一个类，在执行这个类的时候需要传递一个**执行器**（就是Promise接受的那个函数）进去，执行器会立即执行。
- Promise 中有三种状态，分别为 成功、失败、等待。
  - 等待可以变化为成功或者失败，一旦状态确定后（变成失败或者成功后就无法再次修改状态）
  - pending -> fulrilled
  - pending -> rejected
- Promise 有两个返回函数，resolve 是用来接受成功后的值，reject 是用来接受失败后的原因
- Promise 有一个 `then` 方法，`then` 方法内部会判断状态，如果状态是成功就调用成功的回调函数，如果是失败就调用失败的回调函数，且 `then` 方法是被定义在原型对象中的。
- `then` 成功和失败的回调里都会有一个值，分别是成功的值和失败之后的原因。

## 异步状态
- 如果执行器中有异步代码
- 需要在 `then` 方法中添加一个判断，判断当前的状态是否是等待，如果是等待的话就说明中间有异步情况。
- 如果碰到了异步状态，就需要有两个变量去临时存储 `then` 方法中的成功和失败的函数。
- 在异步函数执行后会去调用 `resolve` 或者 `reject` 方法，所以要在这两个方法里面判断一下上面那两个临时变量是否有值，如果有值的话就需要执行一次。

## then 方法的多次调用
- 同一个 `promise` 方法下的 `then` 方法是可以被多次调用的
- 那就意味着每一个 `then` 方法里面传递的函数都是要被执行的
- 如果是同步的情况不用特殊处理
- 如果是异步的情况就需要把每一个 `then` 方法里面的回调函数单独保存，单独处理
- 关键字是使用数组来存储每一个 `then` 方法传进去的函数

## then 方法的链式调用


## 详情代码
``` javascript
// 等待
const PENDING = 'pending';
// 成功
const FULFILLED = 'fulfilled';
// 失败
const REJECTED = 'rejected';


class MyPromise {
  // 实例接受一个执行期，执行期在传递进来后会立即执行，执行的时候接受两个参数，第一个参数是成功，第二个参数是失败函数
  constructor(executor) {
    executor(this.resolve, this.reject);
  }
  // 状态
  status = PENDING;
  // 成功之后的值
  successfulValue = undefined;
  // 失败之后的原因
  failureValue = undefined;
  // 异步状态下用来临时存储成功函数的变量
  successCallback = [];
  // 异步状态下用来临时存储失败函数的变量
  failureCallback = [];

  // 成功函数，这里要使用箭头函数，因为this要指向实例话的promise
  resolve = value => {
    // 会先判断当前状态是否为等待，如果是等待则把状态修改为成功，且需要把成功值传递出去
    if (this.status !== PENDING) return;
    this.status = FULFILLED;
    this.successfulValue = value;
    // 使用 while 循环和数组的 shift 方法来判断控制回调函数
    while (this.successCallback.length) {
      this.successCallback.shift()(this.successfulValue);
    }
  }

  reject = reason => {
    // 先判断状态是否为等待，然后把状态修改为失败，然后把失败的原因传递出去
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.failureValue = reason;
    // 使用 while 循环和数组的 shift 方法来判断控制回调函数
    while (this.failureCallback.length) {
      this.failureCallback.shift()(this.failureValue);
    }
  }

  // then 是被调用的
  then (successFunc, failureFunc){
    if (this.status === FULFILLED) {
      // 成功，执行成功函数，并且将值传递出去
      successFunc(this.successfulValue);
    } else if (this.status === REJECTED) {
      // 失败，执行失败函数，并且将值传递出去
      failureFunc(this.failureValue);
    } else {
      // 等待，说明执行器内有异步函数，这里需要缓存一下两个函数，等待异步执行完毕
      this.successCallback.push(successFunc);
      this.failureCallback.push(failureFunc);
    }
  }
}

```