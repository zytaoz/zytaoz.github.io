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
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get () {
        return val;
      },
      set (newVal) {
        if (val === newVal) return;
        val = newVal;

        // 发送通知
      }
    })
  }
}