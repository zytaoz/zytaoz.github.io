class Vue {
  // 创建 vue 实例 
  constructor (options) {
    /**
     * 1. 通过属性保存选项的数据，这里有三个属性：$options，$data，$el
     * 2. 把 data 中的成员转换成 getter 和 setter，然后在注入到 vue 实例上去
     * 3. 调用 observer 对象，监听数据变化
     * 4. 调用 compiler 对象，解析指令和差值表达式
     */
    this.$options = options || {};
    this.$data = options.data || {};
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;

    // 这里直接执行数据代理的函数
    this._proxyData(this.$data);

    // 调用 observer 对象
    new Observer(this.$data);
  }

  // 代理数据的函数
  _proxyData (data) {
    // 遍历 data 所有的属性
    Object.keys(data).forEach(item => {
      // 把属性注入到 vue 的实例中去
      // 使用 Object.defineProperty 设置 get 和 set
      Object.defineProperty(this, item, {
        enumerable: true, // 可枚举
        configurable: true, // 可配置
        get () {
          // get 方法直接返回数据
          return data[item];
        },
        set (val) {
          // set 方法先判断的新旧数据是否一致，然后再进行赋值
          if (val === data[item]) return;
          data[key] = val;
        }
      })
    })
  }
}