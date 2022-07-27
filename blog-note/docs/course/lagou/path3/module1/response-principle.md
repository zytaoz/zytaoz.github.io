# Vue 响应式

## 数据驱动
`Vue` 是数据驱动的，数据驱动的两个亮点。
- 数据响应式
  - 使用 `javscript` 对象来代替传统的 `dom` 结构，当我们修改数据的时候，视图也会跟着更新，并不用我们去手动的操作 `dom` 结构，把工作中心都放在数据上。
- 双向绑定
  - 数据改变，视图会跟着改变；视图改变，数据同样也会跟着改变。
  - 表单元素上实现了 `v-model` 这种语法糖。
## 响应式核心原理
### Vue 2.X
[Vue 2.X 深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html) <br />
[MDN - Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

通俗点说，`Vue 2.x` 的响应式原理并不难理解。
#### 监听对象
遍历需要监听的对象，然后使用 `Object.defineProperty` 来劫持需要被监听的值，其中使用 `getter` 和 `setter` 来监听对象的读取和写入，在监听到事件后从而触发对应的 `dom` 操作。

### Vue 3.X
[Vue 3.X 深入响应式原理](https://v3.cn.vuejs.org/guide/reactivity.html)

`Vue 3` 使用了 `proxy` 代替了 `Object.defineProperty`，`proxy` 可以直接代理整个对象，而不用遍历对象。[之前的笔记](/course/lagou/path1/ecmascript.html#proxy)
## Vue 中的设计模式
### 发布订阅模式
发布订阅模式会有三方。
- 订阅者
- 发布者
- 信号中心

订阅者和发布者不需要知道对方的存在，发布者将需要发布的信息发布到信号中心，而订阅者只需要订阅对应的事件，就可以在发布者发布事件的时候由信号中心主动触发通知到订阅者。

#### 简单逻辑实现
```js
class eventBus {
  constructor () {
    this.events = {};
  }
  // 注册事件
  $on (name, func) {
    // 注册的事件可能是多个，所以这里是一个数组
    this.events[name] =  this.events[name] ? this.events[name] : [];
    this.events[name].push(func);
  }
  // 触发事件
  $emit (name) {
    if (this.events[name]) {
      // 订阅的事件肯定是一个数组，所以这里要 forEach
      this.events[name].forEach(element => {
        element();
      });
    }
  }
}

const newBus = new eventBus();
newBus.$on('func1', function() {
  console.log('func1');
})
newBus.$on('func1', function() {
  console.log('func11');
})
newBus.$on('func2', function() {
  console.log('func2');
})
newBus.$emit('func1'); // => func1 func11
newBus.$emit('func2'); // => func2
```

### 观察者模式
观察者只有两者。
- 发布者
- 订阅者

发布者需要订阅者的存在。
#### 发布者
发布者需要有一个添加了所有订阅者的数组。所以，就还需要一个添加订阅者的方法，以及事件触发的时候调用所有观察者 `update` 方法的方法。

#### 订阅者
订阅者内部有一个 `update` 方法，该方法是由发布者调用的，当发布者需要触发事件的时候，就去触发订阅者的 `update` 事件。

#### 简单逻辑实现
```js
// 发布者
class Dep {
  constructor () {
    // 存储订阅者
    this.subs = [];
  }

  // 添加订阅者
  addSub (sub) {
    if (sub && sub.update) {
      this.subs.push(sub);
    }
  }

  // 通知订阅者
  notify () {
    this.subs.forEach(element => {
      element.update();
    });
  }
}

// 订阅者
class watch {
  update () {
    console.log('xxxx');
  }
}

const dep = new Dep();
const watcher = new watch();
dep.addSub(watcher);
dep.notify(); // => xxxx
```

## Vue 响应式原理模拟

首先实现了 vue 最基础的功能。
- 新建了一个 vue 的类。
- 类里面有三个属性。
  - options 选项
  - data vue 中的数据
  - el dom 元素
- 实现了一个数据代理的方法，这个方法主要的功能就是遍历 data，然后把 data 的数据注入到 vue 实例上面去，然后注册 get 和 set 方法。

#### observer.js 方法
主要功能
- 把 data 选项中的属性转换成响应式属性，如果 data 的属性也是对象的话，那还需要把这个属性也转换成响应式的
- 数据发生变化后发送通知

**类结构**
```js
class Observer {
  // 构造函数接受 data 数据
  constructor (data) {}

  // walk 方法是遍历 data 中所有的属性
  walk (data) {}

  // 使用 defineProperty 把数据变成响应式数据，也就是说 walk 方法在遍历的时候会调用该方法
  defineReactive (data, key, val) {}
}
```

#### compiler 方法
这个方法的主要功能是
- 编译模板，解析指令和差值表达式
- 页面首次渲染
- 数据变化后重新视图的重新渲染

**类结构**
```js
class Compiler {
  /**
  * el 是实际要操作的 dom 对象，这里传过来的可能是字符串，要转换为 dom 对象
  * vm 是 vue 实例，下面的方法都要用到这个实例，
  */
  constructor (el, vm) {}

  /**
  * 判断节点，看当前节点是文本节点还是元素节点
  * 如果是文本节点就去调用方法解析为插值表达式
  * 如果是元素节点的话就去调用方法解析为指令
  */
  compile (el) {}

  // 解析元素节点中的指令
  compileElement (node) {}

  /**
  * 遍历解析文本节点中的插值表达式
  * 这方法中会调用下面的判断是否是指令和是否是文本的方法去判断当前遍历到的插值表达式
  * 如果是普通指令的话，方法内会通过截取 v- 的方式把指令转化为语义化的方法名去执行
  * 如果是事件的指令的话，会获取对应的方法，然后把他挂载到对应的 node 上
  */
  compileText (node) {}

  // 判断传入的值是否是指令
  isDirective (attrName) {}

  // 判断传入的 node 是不是文本节点
  isTextNode (node) {}

  // 判断传入的 node 是不是元素节点
  isElementNode (node) {}
}
```

#### Dep 方法
这个方法的主要作用是
- 统计收集观察者
- 执行观察者

这个方法主要是在 `observer` 中使用
- 在调用 `get` 方法的时候收集依赖
- 在调用 `set` 方法的时候调用依赖发送通知

**类结构**
```js
class Dep {
  constructor () {}

  // 添加观察者
  addSub (sub) {}

  // 发送通知
  notify () {}
}
```