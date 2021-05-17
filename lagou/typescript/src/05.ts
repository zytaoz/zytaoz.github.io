class Phone {
  public brand: string
  private price: number = 100
  protected readonly size: boolean

  constructor( brand: string, price: number, size: boolean ) {
    this.brand = brand;
    this.size = size;
  }
}

const iphone = new Phone('apple', 5000, true);

console.log(iphone.brand);
// console.log(iphone.price); // 不能访问
// console.log(iphone.size); // 不能访问

class xiaomi extends Phone {
  constructor(brand: string, price: number, size: boolean) {
    super(brand, price, size);
    // console.log(this.price); // private 不能访问
    console.log(this.size); // protected 可以访问
  }
}

const xm = new xiaomi('mi11', 4000, true);

class huawei extends Phone {
  private constructor( brand: string, price: number, size: boolean) {
    super(brand, price, size);
  }

  static create(brand: string, price: number, size: boolean) {
    return new huawei(brand, price, size);
  }
}

// const meta = new huawei(); // 私有的，不能被 new
const meat = huawei.create('mete', 6000, true); // 可以使用静态属性