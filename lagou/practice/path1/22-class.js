class man {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(this.name);
  }

  static create(name) {
    return new man(name);
  }
}

// 静态方法可以直接访问，且他的 this 指向是的实例自己
const tzy = man.create('tzy');
console.log(tzy);