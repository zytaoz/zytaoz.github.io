# Vue Router 源码及实现
::: tip 写在前面
Vue 可以说是拥有整个前端生态中最友好的官方中文文档，所以根本就没有理由不去熟读文档。

[Vue Router v3.x](https://router.vuejs.org/zh/)
:::

## 路由模式
`Vue Router` 一共有两种路由模式。

### Hash 模式
`hash` 模式就是链接里面带 `#`。
- 而 `hash` 模式是基于锚点，即使用 `url` 中 `#` 后面的链接作为路径参数。
- 然后通过监听 [onhashchange](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowEventHandlers/onhashchange) 事件。
- 匹配渲染当前路由地址的对应组件来实现的。

### history 模式
`history` 模式从链接上看起来就是正常的 `url` 链接。
- 他是通过使用 [History.pushState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState) 和 [History.replaceState](https://developer.mozilla.org/zh-CN/docs/Web/API/History/replaceState) 来改变链接地址。
- 然后监听 [popstate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/popstate_event) 事件。
- 在监听到 `url` 有变化后，去匹配渲染当前路由地址的对应组件。

#### 一个老生常谈的问题。
`history` 上线之后需要进行服务端配置才能实现路由访问。为什么会这样呢？
- 首先从浏览器的层面上来说，它并不知道我们访问的这个 `URL` 地址是不是一个单页面应用，他只会像服务端请求我们访问的链接地址。
- 但是因为我们的网站是一个单页面应用，浏览器访问的这个地址其实是不存在的，服务端上的页面链接只有 `index.html` 是可以被真实访问到的。
- 所以，不管是 `nodejs` 还是 `nginx` 他们做的事情都是一样的。即：不管浏览器请求的是哪一个页面链接，始终只返回 `index.html` 入口文件的链接。



## 实现一个 Vue Router
### 类图
<img :src="$withBase('/lagou/vue-router.png')">

### 属性
#### options
这个属性就是用来接受传入的参数。

#### routeMap
用来存储路由地图，他是解析把构造函数传入的值，解析成了键值对的形式，在这个例子中，键是路由地址，值是地址对应的组件。

#### data
[Vue observale](https://cn.vuejs.org/v2/api/#Vue-observable) <br />
用来存储当前路由地址，需要注意的是，这个地址是响应式的，这里使用了 `vue` 的 `observale` 方法声明了一个响应式的地址。通俗点理解，可以把 `observale` 声明的对象理解成在 `vue` 中 `data` 里面声明的对象。当 `data` 发生变化时，会触发组件更新。

### 方法
::: tip 构造函数，实例，实例化，显式原型，隐式原型，成员方法
这是很基础的概念，搞不懂的话，`install` 这段肯定看不懂。

汽车厂商需要生产汽车，那么生产汽车的流水线就是**构造函数**，生产出来的一辆辆汽车就是一个个**实例**，而生产的过程就是**实例化**。一个构造函数可以使用 `new` 方法生成无数个实例，就像一条流水线可以生产出无数的汽车一样。而在实例化的过程中可以添加预设的**参数**，如同生产汽车可以选配颜色。而每一辆通过这个流水线生产出来的汽车都有空调，那么这个汽车上的空调就是**实例**的**成员方法**。

对某个实例添加一个新的方法，就好像是一个人把一辆汽车买回家之后单独的对他自己的汽车进行改装，这个改装只会影响到他自己的汽车，而不会影响到同一个流水线上生产出来的其他汽车。这就是对某一个实例添加新的**成员方法**。

如果汽车的生产厂商发现了他们生产的汽车有一个缺陷，他就可以直接在生产汽车的流水线上添加一道工序修复这个缺陷。而在实际的使用过程中大多数时间我们很难针对流水线进行二次改装（使用了第三方库），往往都是在流水线后面再添新的厂房以完成这项修复。这就是在**构造函数**的**原型**上挂载新的方法。且因为这个缺陷是汽车的生产厂商发现的，他主动的召回了这条流水线上生产的所有汽车，所以又被称为**显式原型（prototype）**。

那如果不是汽车生产商发现的缺陷，而是某个车主发现的缺陷，车主告知了汽车生产厂商，汽车生产厂商重新走上面召回的流程，那通过车主发现的又被称为**隐式原型（\_\_proto\_\_）**，而对于这个流水线（构造函数）来说，不管是他们谁发现（原型还是构造函数）的，最终修改的都是同一条流水线。所以**构造函数的显示原型**全等于**实例的隐式原型**（他们指向同一个内存地址）。

而召回的过程，需要汽车厂商通知车主，那也就意味着汽车厂商和车主必须存在着某种联系方式，那这种联系方式就可以看作为**原型链**。它是一个无形的关系，把汽车厂商和车主联系在一起，就像构造函数通过原型链与实例联系在了一起。
:::
#### install
`Vue` 插件必须要有的，且在初始加载的时候会调用的静态方法。他有两个参数，第一个参数是 `vue` 的构造函数。在该例子中，这个方法主要做了三件事。
- 判断当前插件有没有被安装过。
- 把 `Vue` 实例挂载到可以访问到的变量上去，这里是一个全局变量，我感觉这样不好，但是尝试着把他挂载到 `this` 上没有成功。
- 把创建 `Vue` 实例的时候传入的 `router` 对象注入到 `Vue` 实例上面去。
  - 这是一句很绕的话，我把这段视频看了三遍也没有理解为什么需要这么做。知道里面每一行代码的意义，但是就是不知道为什么要这么去做。
  - 这里面使用了构造函数 `Vue` 的 `mixin` 去调用 `beforeCreate` 方法，以保证每个 `Vue` 实例都能加载到这段代码。
  - 且因为组件也属于 `vue` 的实例，而组件上是没有 `router` 对象的，只有 `vue` 的原型上才有。
  - 所以这里做了一个判断，如果有 `router` 对象才去执行，把他挂载到 `vue` 实例的原型上。

#### constructor 构造函数
构造函数声明了上面的三个属性。

#### createRouteMap
这个方法遍历 `options` 属性的 `routes`，然后把结果按照键值对的形式存入到 `routeMap` 中里。

#### initComponent
这个方法主要渲染了组件。`router-link` 和 `router-view`，因为当前 `vue` 处于[运行时版本](/course/lagou/path3/basis.html#vue-的构建版本)，所以使用了 `h` 函数去生成 `dom`。

#### initEvent
这个方法用来监听浏览器地址的变化，有变化的就触发修改 `data` 的值，而 `data` 是响应式的，从而触发组件重新渲染。

#### init 
这个方法是入口的公共方法。

### 详细代码
``` javascript
let _Vue = null

export default class VueRouter {
  constructor (options) {
    /**
     * 初始化的三个属性
     * options 为记录传入的路由参数和选项
     * routeMap 用来记录路由地址的键值对，键是路由地址，值是组件
     * data 它使用了 VUE 的 observable 方法让他变成了一个响应式的对象，它里面有一个对象，对象 有一个属性 current 用来记录当前的路由地址
     * 当 current 发生变化的时候，会从 routeMap 中获取键对应的值，然后渲染
    */
    this.options = options
    this.routeMap = {}
    // this._vue = null
    this.data = _Vue.observable({
      current: '/'
    })
  }

  // 首先要建一个静态的 install 方法，在调用 install 方法的时候，VUE 会传入两个属性，一个是 VUE 的实例，另一个是参数，这里就只写一个 VUE 实例
  static install (Vue) {
    // 1. 首先要判断当前插件有没有被安装过，如果安装过就直接退出，这里使用了一个静态的 installed 参数来存储该插件有没有被安装过
    if (VueRouter.install.installed) {
      return
    }
    // 插件已安装
    VueRouter.install.installed = true

    // 2. 把 VUE 的构造函数挂载到全局变量上面来
    _Vue = Vue

    /**
     * 3. 把创建VUE实例时候传入的router对象注入到Vue实例上面去
     * 这里为了确保每个组件都能运行，使用了VUE的混入，挂载到的 beforeCreate 生命周期上
     */
    _Vue.mixin({
      beforeCreate () {
        console.log(this.$options)
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  // 用来把传入的 options 解析成键值对的形式存储到 routeMap 里面
  createRouteMap () {
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  // 创建组件
  initComponents (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },
      // 运行时版本的 vue 并不支持 template ，所以要自己实现 render 函数
      render (h) {
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            // 避免浏览器重新渲染页面，这里重写了 a 标签的点击事件，手动的去修改浏览器历史记录
            click: this.aClick
          }
        }, [this.$slots.default])
      },
      methods: {
        aClick (e) {
          /**
           * history 模式添加访问记录
           * 第一个参数是状态对象，这里用不到就传一个空对象
           * 第二个参数是标题，用不到传空字符串
           * 第三个参数是新的地址，这里传入新的地址
           */
          history.pushState({}, '', this.to)

          
          // hash 模式修改 hash
          // window.location.hash = this.to

          // 把当前路由地址改成新的地址，因为 data.current 是一个响应的对象，当路由地址发生变化的时候会重新去加载 render 函数
          this.$router.data.current = this.to
          // 阻止默认的跳转事件
          e.preventDefault()
        }
      }
      // 完成版的 vue 是支持 template 语法的，他有编译器把 template 模板编译成 render 函数
      // template: '<a :href="to"><slot /></a>'
    })

    const _this = this
    Vue.component('router-view', {
      // 获取到当前路由的地址，然后找到它对应的组件，使用 h 函数把组件渲染出来
      render (h) {
        const nowComponent = _this.routeMap[_this.data.current]
        return h(nowComponent)
      }
    })
  }

  // 监听地址发生变化
  initEvent () {
    //  history 模式，监听 popstate 发生变化的时候就把获取到的 pathname 设置为当前路由的地址
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
    // 初始化加载的时候也要运行一下，在不是首页刷新的地方会加载首页模板
    this.data.current = window.location.pathname

    // hash 模式的监听
    // window.addEventListener('hashchange', () => {
    //   this.data.current = window.location.hash.split('#')[1]
    // })
    // this.data.current = window.location.hash.split('#')[1]
  }

  // 初始化方法
  init () {
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvent()

    // hash 模式页面初加载的自动自动加 # 号
    // window.location.hash = '/'
  }
}
```