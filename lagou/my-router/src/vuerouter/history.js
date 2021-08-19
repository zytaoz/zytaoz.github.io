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
