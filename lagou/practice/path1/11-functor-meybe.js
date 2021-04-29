class MeyBe {
  static of(value) {
    return new MeyBe(value);
  }

  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return this.isNothing() ? MeyBe.of(null) : MeyBe.of(fn(this.value));
  }

  isNothing() {
    return this.value == null;
  }
}1

let val1 = MeyBe.of(1).map(x => x ++);
console.log(val1);