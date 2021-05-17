interface Eat {
  eat (food: string): void
}

interface Speak {
  speak (status: number): void
}


class Person implements Eat, Speak {
  eat (food: string): void {
    console.log(food);
  }
  speak (status: number): void {
    console.log(status);
  }
}

class dog implements Eat, Speak {
  eat (food: string): void {
    console.log(food);
  }
  speak (status: number): void {
    console.log(status);
  }
}


abstract class Animal {
  eat (food: string): void {
    console.log(food); 
  }

  // 还可以抽象一个方法，这个方法也不用在这里实现，但是继承的类必须要实现这个方法
  abstract run (distance: number): void;
}

// const cat = new Animal(); // 不能事例抽象类

class Dog extends Animal {
  run(distance: number): void {
    console.log(distance); 
  }
}