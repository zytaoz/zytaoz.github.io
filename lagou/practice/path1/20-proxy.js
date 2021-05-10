const obj = {
  name: 'tzy',
  age: 30
}

/**
 * new 一个 Proxy，接受两个参数
 * 第一个是需要监听的对象
 * 第二个也是一个对象，这个对象有两个方法，get方法会监听到第一个对象的读取，set 方法会监听到第二个对象的写入
 * get 方法接受两个参数，第一个是被监听的对象，第二个是访问的属性
 * set 方法接受三个参数，第一个是被监听的对象，第二个是操作的属性，第三个是操作属性的值
 */
const proxyObj = new Proxy(obj, {
  get(target, key) {
    return key in target ? target[key] : 'default val';
  },
  set(target, key, value) {
    // 可以在写入之前做些数据校验
    target[key] = value;
  }
})

console.log(proxyObj.name);
proxyObj.gender = '男';
console.log(proxyObj);

// 监听数组
const arr = [];
const proxyArr = new Proxy(arr, {
  set(target, index, val) {
    console.log(target, index, val); // => [] 0 100
    target[index] = val;
    return true;
  }
})

proxyArr.push(100); // => [ 100 ] length 1
console.log(proxyArr); // => [ 100 ]
