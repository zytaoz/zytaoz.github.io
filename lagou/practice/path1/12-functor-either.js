// 二者选一的函子
class Left {
  static of(value) {
    return new Left(value);
  }

  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return this;
  }
}

class Right {
  static of(value) {
    return new Right(value)
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return Right.of(fn(this._value));
  }
}

function parseJSON (str) {
  try {
    return Right.of(JSON.parse(str));
  } catch (err) {
    return Left.of({ error: err.message })
  }
}

let r1 = parseJSON("{ name: 123 }")
let l1 = parseJSON('{ "name": 123 }')
console.log(r1);
console.log(l1);