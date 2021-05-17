# TypeScript

::: tip 前言
`JavaScript` 是一门具有动态类型的弱类型语言。因此才诞生了 [TypeScript](https://www.typescriptlang.org/zh/)。他是 `JavaScript` 的超集。强弱类型这个东西没啥好记得了。
:::
<br />

> 哎，可能是之前这些东西已经看过很多遍了，但是一直都没去用，所以很多地方感觉似曾相识，但是又不知道是啥东西。

之前的一部分笔记[TypeScript](/web/advanced/ts/basis.html)

## 强类型语言的优势
- 可以更早的发现错误，在编译的时候而不是运行的时候
- 更智能的代码提示，如果是 `TypeScript` 的话好像必须要用 `VsCode`
- 重构的时候更加牢靠
- 可以减少不必要的类型判断（但是如果是后台传过来的值，该判断的还是需要判断啊）
## flow
> `JavaScript` 类型检查器。

这个东西有个啥用？明明已经有 `TypeScript` 了。仅作为了解吧。

## TypeScript 原始类型
就是很简单的东西，没啥好看的。

**这里有一个需要注意点，如果打开严格模式的情况下（默认开启），那么`string` `number` `boolean` 是不能为空的，但是如果关闭严格模式的话，可以为`null`**
``` typescript
const a: string = 'string';
const b: number = 100;
const c: boolean = true;
```
``` json
{
  "strict": true, // 严格模式
}
```
## TypeScirpt 标准库
就比如 `ES5` 里面没有 `Symbol` 和 `promise`，如果在 ts 编译成 js 的时候，标准库选择的是不支持这些 api 的标准库，那么就会出现报错，解决方案是，在 `tsconfig.json` 中使用 `lib` 来指定标准库。
- `ES2015` 是为了兼容类如上面的两个 `API`
- `DOM` 则是为了兼容 `DOM` 和 `BOM` 的 `API`
``` json
{
  "lib": ["ES2015", "DOM"]
}
```

## 作用域的问题
在很多文件进行整体编译的时候，`ts` 会把他们在一个作用域下进行编译，然后就会报不能重复定义的错误。

## object 类型
`ts` 中的 `object` 类型并不单指对象类型，而是泛指除了原始类型之外的其他所有类型，如数组、对象、函数。

如果要声明一个对象，就需要使用**对象字面量语法**去声明
``` typescript
const obj: {
  foo: number,
  str: string
} = {
  foo: 12,
  str: 'ssss'
}
```

## 数组
``` typescript
// 两种定义数组里面全部都是数字的方式
const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

// 数组内包含多种类型
const arr3: Array<number | string> = [1, 2, 3, 'sss'];
```

## 元祖
在定义一个固定长度，类型也不太一样的数组的时候，就可以使用元祖。他要求定义的数组长度和类型必须要和要求的完全一致。
``` typescript
const arr4: [string, number] = ['src', 123]
```

## 枚举
一般用于将一个变量的值限定在某一个区间内，比如一个状态只有`0,1,2`的变量。
``` typescript
enum Status {
  start = 0,
  process = 1,
  end = 2
}

const postData = {
  title: 'text',
  status: Status.start
}
```
他最终会将文件编译成下面这个样子。
``` javascript
var Status;
(function (Status) {
    Status[Status["start"] = 0] = "start";
    Status[Status["process"] = 1] = "process";
    Status[Status["end"] = 2] = "end";
})(Status || (Status = {}));
var postData = {
    title: 'text',
    status: Status.start
};
```
这样编译出来的文件对当前的代码是有侵入性的。在使用枚举的时候最好使用 `const` 关键字进行声明。
``` typescript
const enum Status {
  start = 1,
  process = 2,
  end = 3
}

const postData = {
  title: 'text',
  status: Status.process
}
```
使用 `const` 声明后编译出来的就是这个样子，对代码没有侵入性。
``` javascript
"use strict";
var postData = {
    title: 'text',
    status: 2 /* process */
};
```

如果枚举中需要设置的是一个连贯的数字，那么就可以省略不写数字。数字就会从0开始记数。
``` typescript
enum Status {
  start,
  process,
  end
}
```

或者数字可以从中间开始
> 感觉这样不是太好，最好的还是定义好数字
``` typescript
enum Status {
  start = 6,
  process,
  end
}
```

枚举还可以使用字符串，但是字符串是不能像数字那样省略不写的。
``` typescript
const enum Status {
  start = '开始',
  process = '进行中',
  end = '结束了'
}

const postData = {
  title: 'text',
  status: Status.process
}
```

## 函数类型
### 函数声明
- 函数声明的时候需要将参数的类型和该函数返回的类型都标明，在传入实参的时候需要按照定义的形参来传入，不管是类型和数量都必须一致。
- 在参数后面加上一个 `?` 那这个参数就会变成一个可选的参数。如 `fn2`
- 可选参数还可以使用 `es6` 里面 `=` 进行设置默认值。如 `fn3`

``` typescript
function fn1(a: number, b:number): string {
  return 'text';
}

function fn2(a: number, b?: number): string {
  return 'text';
}

function fn3(a: number, b: number = 100): string {
  return 'text';
}


fn1(100, 300);
fn2(100);
fn3(100);
```
### 函数表达式
- 函数表达式声明的函数本身也可以像函数声明那样去设置形参和返回值的类型。
- 同时接受函数声明的变量本身也会有对应的形参和返回值。
``` typescript
const fn4: (a: number, b: number) => number = (a: number, b:number): number => {
  return a + b;
}

fn4(100, 300);
```

## 函数任意类型
- 可以使用 `any` 关键字来接受任意类型的参数。
- `any` 不会检查类型，所以他是不安全的。
``` typescript
function fn5 (val:any) {
  return val;
}
```

## 隐式类型推断
- 在声明一个变量，且没有给这个变量标明类型的时候，`typescript` 会推断出该变量是什么类型，然后如果再赋值其他类型的值，就会报错。
- 如果 `typescript` 无法确认一个变量的类型，就会设置该变量类型为 `any`。
- 在必要的情况下，最好给所有的变量都声明一个类型。
``` typescript
let age = 30; // 这时候就会隐式推断为 number 类型
let number; // 这时候就是 any 类型
```

## 类型断言
- 在 `typescript` 无法判断一个参数是什么类型的时候可以使用类型断言的方式来明确该参数的类型。
- 可以使用 `as` 关键字或者 `<>` 尖括号
- 尖括号的方式不能在 `jsx` 环境下使用，否则会冲突。
- 类型断言不是类型转换，因为类型转换是在代码执行过程中实现的，而类型断言只会出现在编译阶段。

``` typescript {5,6}
const nums = [1, 12, 123];

const res = nums.find(i => i > 0);

const nums1 = res as number;
const nums2 = <number>res;

const ss = nums1 * nums1;
const ss1 = nums2 * nums2;
```

## 接口
- 用来约束对象的结构，必须严格按照接口约束的来定义类型。
- 可以使用 `?` 来指定是否可选
- 可以使用 `readonly` 来指定是否为只读属性
``` typescript
interface Person {
  name: string;
  age: number;
  address?: string; // 可选
  readonly class: number; // 只读
}

function func1(person: Person) {
  console.log(person.name);
  console.log(person.age);
}

func1({
  name: '桃子', 
  age: 30,
  class: 5
})
```

### 接口的动态属性
- 动态的对象类型，这时候就要使用动态的接口
> 这里有一个报错，在我声明 `cache` 的时候，好像是读到了什么内置的方法？等待确认。
``` typescript
interface Cache {
  [key: string]: string;
}

const cache: Cache = {};

cache.add = 'val1'
```

## 类
- 在使用类的时候，里面的属性必须要在类里面首先声明其类型
- 类的属性还需要有默认值。

``` typescript
class Phone {
  brand: string
  price: number = 100

  constructor( brand: string, price: number ) {
    this.brand = brand;
  }
}
```

### 访问修饰符
- `public` 公共属性，可以在外界被访问，`typescript` 默认就是 `public` 类型。
- `private` 私有属性，不能在外界被访问，只能在内部被使用。
- `protected` 受保护的属性，可以在被继承的 `class` 中访问
- 还可以设置只读属性，第四行

``` typescript
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
    console.log(this.price); // private 不能访问
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

const meta = new huawei(); // 私有的，不能被 new
const meat = huawei.create('mete', 6000, true); // 可以使用静态属性
```

### 类的接口
- 理解起来和前面对象的接口差不多，需要声明一个接口，然后在使用的时候，用 `implements` 关键字使用。
- 这里有一个需要注意的地方，就是尽可能的把接口拆分的足够小，一个接口只去完成一个能力。

``` typescript
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
```

### 抽象类
- 一般是指泛指一个大的类型，这个类型不要有具体的实现，且只能被继承，不能被 `new`。
- 类里面还可以声明抽象方法，同样的，抽象方法不用具体实现，但是继承的类一定要实现该方法。
``` typescript
abstract class Animal {
  eat (food: string): void {
    console.log(food); 
  }

  // 还可以抽象一个方法，这个方法也不用在这里实现，但是继承的类必须要实现这个方法
  abstract run (distance: number): void;
}

const cat = new Animal(); // 不能事例抽象类

class Dog extends Animal {
  run(distance: number): void {
    console.log(distance); 
  }
}
```

## 泛型
- 在定义的时候无法确定参数类型，在使用的时候才能定义参数类型。
- 使用尖括号来声明参数的类型

``` javascript {9,10,15,16}
function createNumberArray (length: number, value: number): number[] {
  return Array<number>(length).fill(value);
}

function createStringArray (length: number, value: string): string[] {
  return Array<string>(length).fill(value);
}

function createArray<T> (length: number, value: T): T[] {
  return Array<T>(length).fill(value);
}

const arrNumber = createNumberArray(3, 1100);
const arrString = createStringArray(3, 'text');
const arrAnyNumber = createArray<number>(3, 100);
const arrAnyString = createArray<string>(3, 'text');
```

## 类型声明
- 第三方模块使用的时候可能是没有类型声明的，这时候可以使用 `declare` 关键字声明
- 现在很多第三方模块都提供了 `typescript` 的版本，一般都是 `@type/` 加模块名称。
``` typescript {3}
import { camlCase } from 'lodash'

dcclare function camlCase(input: string): string;

const res = camlCase('test');
```
## 参考