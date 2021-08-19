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
``` javascript
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

简易实现
``` javascript
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