# 手写 Promise 源码

> 这一块看了两遍，但是总感觉有很多地方理解的有问题，比如处理 `then` 方法链式调用的时候直接使用了 `setTimeout` 来处理获取不到当前函数的情况。虽然知道这里是使用了宏任务的概念，但是总感觉应该还有更优雅的方法，总感觉这样写的一点也不高级，哪里怪怪的。还有就是多个重复逻辑没有做逻辑抽离。还有异常处理和链式调用中错误和等待的处理放在一节会感觉很跳，为啥不和 `then` 方法的链式调用放一起讲呢？可能理解还是不够吧，有时间再多看看吧。
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
- 链式调用的 `then` 方法会接受到一个新的 `promise`
- 链式调用的 `then` 的值，是上一个 `then` 方法返回的值
- 在 `then` 方法返回值的时候要判断一下，这个值是普通值还是一个 `promise` 的原型对象，如果是普通值就直接返回，如果是 `promise` 则需要获取到返回结果，再来判定是走 `resolve` 还是 `reject`
- 链式调用返回的值，需要判断一下当前返回的值是不是他自己，`promise` 对象不能返回自己实例，会陷入循环调用。这里有点绕，需要多看一看

## 异常捕获
- 使用 `trycatch` 来捕获
- 执行器执行的时候需要捕获异常
- 成功回调运行的时候需要捕获异常。就是 `then` 方法里面。

## 处理链式调用时错误和等待的状态
- 老师就是把 `then` 方法中方式复制到了失败和异步中

## then 方法的参数
- `then` 方法的两个参数都是可选的
- 在 `then` 方法的开始就去判断两个参数是否存在，如果存在就继续执行，不存在就传递一个新的函数进去

## promise.all
- `all` 方法是一个静态方法
- 接受一个数组，返回一个 `promise` 对象
- 有一个失败就直接返回失败，全部成功才会返回成功
- 循环传递进来的数组，判断传进来的值，判断值是普通值还是 `promise` 对象
- 如果是普通值的话就直接把值添加到返回的数组中
- 如果是 `promise` 对象的话就获取到 `promise` 对象的值，然后再把他添加到返回的数组中
- 在处理 `promise` 对象的时候需要考虑当前是不是异步操作

## promise.resolve
- `resolve` 方法是一个静态方法
- 给的参数是不是 `promise` 对象，如果是的话就直接返回，如果不是就用 `promise` 包裹一下再返回。

## finally 方法
- 不管成功还是失败，`finally` 方法都会执行一次。
- 他会返回一个 `promise`，可以继续调用 `then` 方法

## catch 方法
- 就直接定义一个方法，然后调用 `then` 方法，然后给 `then` 方法的一个参数传入 `undefined`，然后返回出来该 `then` 方法

## 详情代码
> 参考笔记还原
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
    try {
      // 捕获执行器的异常
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error)
    }
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
      this.successCallback.shift()();
    }
  }

  reject = reason => {
    // 先判断状态是否为等待，然后把状态修改为失败，然后把失败的原因传递出去
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.failureValue = reason;
    // 使用 while 循环和数组的 shift 方法来判断控制回调函数
    while (this.failureCallback.length) {
      this.failureCallback.shift()();
    }
  }

  // then 是被调用的
  then (successFunc, failureFunc){
    // then 方法的两个参数都是可选的，这里需要做异常处理
    successFunc = successFunc ? successFunc : val => val;
    failureFunc = failureFunc ? failureFunc : error => { throw error }
    // 这里返回的是链式调用的promise，他也有 resolve 和 reject 方法
    let callbackPromise = new MyPromise((resolve, reject) => {
      // 抽离公用逻辑，这里要用箭头函数，否则 this 指向会出问题
      const resolveFunc = () => {
        setTimeout(() => {
          try {
            // 这里是为了链式调用把值传递给下一个 then 方法，在传递值的时候要判断一下当前值是普通值还是promise 对象
            // 这里为什么使用定时器把返回 then 方法值的函数给包起来了
            // 因为这个函数的第一个值是当前函数主体，在代码执行到当前行的时候这个函数还并没有生成好
            // 所以就借用定时器的异步函数来先创建函数，然后再把函数返回出去
            // 但是感觉这样写不太正规，有点怪怪的
            let successVal = successFunc(this.successfulValue);
            resolvePromiseFunc(callbackPromise, successVal, resolve, reject);
          } catch (error) {
            // 如果捕获到了错误，就把错误信息传递给下一个 reject 方法
            reject(error);
          }
        }, 0)
      }

      const rejectFunc = () => {
        setTimeout(() => {
          try {
            // 失败，执行失败函数，并且将值传递出去
            let successVal = failureFunc(this.failureValue);
            resolvePromiseFunc(callbackPromise, successVal, resolve, reject);
          } catch (error) {
            // 如果捕获到了错误，就把错误信息传递给下一个 reject 方法
            reject(error);
          }
        }, 0);
      }

      if (this.status === FULFILLED) {
        // 成功，执行成功函数，并且将值传递出去
        resolveFunc();
      } else if (this.status === REJECTED) {
        rejectFunc();
      } else {
        // 等待，说明执行器内有异步函数，这里需要缓存一下两个函数，等待异步执行完毕
        this.successCallback.push(() => {
          resolveFunc();
        });
        this.failureCallback.push(() => {
          rejectFunc();
        });
      }
    });
    // 实现链式调用，那么 then 方法就要返回一个 promise
    return callbackPromise;
  }

  finally(callback) {
    // 返回一个 promise
    return this.then(value => {
      // 不管成功还是失败都需要执行一下回调函数
      // 还需要异步的情况，不管他传来的是什么值，都使用 resolve 静态方法去执行一下他，然后在返回值
      return MyPromise.resolve(callback()).then(() => value);
    }, e => {
      // 不管成功还是失败都需要执行一下回调函数
      return MyPromise.resolve(callback()).then(() => { throw e });
    })
  }

  catch(failureFunc) {
    return this.then(undefined, failureFunc);
  }

  // all 是一个静态方法，接受一个数组作为参数
  static all(array) {
    const result = [];
    let nowIndex = 0;
    // 返回一个 promise 
    return new MyPromise((resolve, reject) => {

      // 这个方法是用来将返回的数组的键值对应，且来判断当前循环是否执行结束
      function addIndexData(index, value) {
        result[index] = value;
        nowIndex ++;
        if (nowIndex === array.length) {
          resolve(result);
        }
      }

      // 循环传进来的数组
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        // 如果是 promise 对象就执行 then 方法拿到值然后添加到返回的数组中，
        // 如果有异常就直接抛失败
        if (element instanceof MyPromise) {
          element.then(val => {
            addIndexData(index, val);
          }, e => {
            reject(e);
          })
        } else {
          // 如果不是 promise 对象就将值直接添加到返回数组中
          addIndexData(index, element);
        }
      }
    })
  }

  // resolve 静态方法
  static resolve(val) {
    // 判断值是不是 promise 对象，如果是的话就直接返回，不是的话就使用 `promise` 包裹一下再返回
    if (val instanceof MyPromise) {
      return val;
    } else {
      return new MyPromise(resolve => resolve(val));
    }
  }
}

// 判断 then 方法返回的值是哪种类型，以此来决定调用哪个函数
function resolvePromiseFunc(promise, val, resolve, reject) {
  // 在then 方法返回值的之后要判断一下返回的是不是他自己的实例，如果是的话就需要抛出错误
  if (promise === val) {
    return reject(new TypeError('循环调用的错误'));
  }
  if (val instanceof MyPromise) {
    // 如果不是普通值就需要获取到 promise 的值，然后分别调用函数
    val.then(value => resolve(value), err => reject(err));
  } else {
    // 如果是普通值的话就直接返回
    resolve(val);
  }
}
```