const fp = require('lodash/fp');

class IO {
  static of(value) {
    return new IO(function() {
      return value;
    })
  }

  constructor(fn) {
    this.value = fn;
  }

  map(fn) {
    return new IO(fp.flowRight(fn, this.value));
  }
}

let r = IO.of(process).map(p => p.execPath);
console.log(r.value());