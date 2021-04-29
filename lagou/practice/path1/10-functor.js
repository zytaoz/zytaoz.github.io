// 函子
class functor {
  static of(value) {
    return new functor(value);
  }

  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return functor.of(fn(this.value));
  }
}

const fn1 = functor.of(5).map(x => x * x).map(x => x - 1);
console.log(fn1);