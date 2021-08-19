let _Vue = null

export default class VueRouter {
  constructor (options) {
    // 记录参数
    this.options = options
    // 记录路由的参数
    this.routeMap = {}
    // 声明一个记录路由地址的响应式对象
    this.data = _Vue.observable({
      current: '/'
    })
  }

  // 静态的 install 方法
  static install (vue) {
    // 判断当前插件有没有被安装过
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true
    // 挂载 vue 实例
    _Vue = vue
    // 创建 vue 是的时候把传入的 rouer 对象注入到 vue 实例上面去
    _Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router
          this.$options.router.init()
        }
      }
    })
  }

  // 生成路由地图
  createRouteMap () {
    this.options.routes.forEach(item => {
      this.routeMap[item.path] = item.component
    })
  }

  initComponent (Vue) {
    // 渲染 router-link 组件
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        return h('a', {
          attrs: {
            link: this.to
          },
          on: {
            click: this.aCLick
          }
        }, [this.$slots.default])
      },
      methods: {
        aCLick (e) {
          // 修改 hash
          window.location.hash = this.to
          // 赋值路由地址，触发组件渲染
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    })

    const _this = this
    Vue.component('router-view', {
      // 通过路由地图和当前路由地址获取组件，然后交给 h 函数渲染
      render (h) {
        const nowComponent = _this.routeMap[_this.data.current]
        return h(nowComponent)
      }
    })
  }

  initEvent () {
    window.addEventListener('hashchange', () => {
      // 获取 hash 的时候需要手动分割一下
      this.data.current = window.location.hash.split('#')[1]
    })
    // 页面初加载的时候也要能够加载组件
    this.data.current = window.location.hash.split('#')[1]
  }

  init () {
    this.createRouteMap()
    this.initComponent(_Vue)
    this.initEvent()
    // 页面初加载的自动自动加 # 号
    window.location.hash = '/'
  }
}
