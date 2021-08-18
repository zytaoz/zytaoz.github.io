let _Vue = null;

export default class VueRouter {
  constructor (options) {
    /**
     * 初始化的三个属性
     * options 为记录传入的路由参数和选项
     * routeMap 用来记录路由地址的键值对，键是路由地址，值是组件
     * data 它使用了 VUE 的 observable 方法让他变成了一个响应式的对象，它里面有一个对象，对象有一个属性 current 用来记录当前的路由地址
     * 
     * 当 current 发生变化的时候，会从 routeMap 中获取键对应的值，然后渲染
     */
    this.options = options;
    this.routeMap = {};
    // this._vue = null;
    this.data = _Vue.observable({
      current: '/'
    })
  }

  // 首先要建一个静态的 install 方法，在调用 install 方法的时候，VUE 会传入两个属性，一个是 VUE 的实例，另一个是参数，这里就只写一个 VUE 实例
  static install (Vue) {
    // 1. 首先要判断当前插件有没有被安装过，如果安装过就直接退出，这里使用了一个静态的 installed 参数来存储该插件有没有被安装过
    if (Vue.VueRouter.installed) {
      return;
    }
    // 插件已安装
    Vue.VueRouter.installed = true;

    // 2. 把 VUE 的构造函数挂载到全局变量上面来
    _Vue = Vue;

    /**
     * 3. 把创建VUE实例时候传入的router对象注入到Vue实例上面去
     * 这里为了确保每个组件都能运行，使用了VUE的混入，挂载到的 beforeCreate 生命周期上
     */
    _Vue.mixin({
      beforeCreate() {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
        }
      },
    })
  }

  // 用来把传入的 options 解析成键值对的形式存储到 routeMap 里面
  createRouteMap () {
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component;
    });
  }

  initComponents () {
    
  }
}