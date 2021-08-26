/**
 * 把 data 中的响应数据转换成响应式数据
 * 如果 data 中的某个属性也是对象的话，也需要对其进行转换
 * 数据发生变化触发通知
 */

class Observer {
  constructor (data) {
    this.walk(data);
  }

  walk (data) {
    if (data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this.defineReactive(data, key, data[key]);
      });
    }
  }

  defineReactive (data, key, val) {
    const _this = this;
    // 把 key 也放到 this.walk 内调用一下，以防止 key 本身也是一个对象
    this.walk(key);
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get () {
        /**
         * 这里为什么会使用一个现成的值而不是直接使用key去获取？
         * 因为使用 key 去获取也会触发 get 事件，那这里就形成了一个获取值的死递归
         */
        return val;
      },
      set (newVal) {
        if (val === newVal) return;
        val = newVal;
        // 如果给一个值设置为对象的话，那么他这个设置的对象也需要是响应式的
        _this.walk(newVal);
        // 发送通知
      }
    })
  }
}