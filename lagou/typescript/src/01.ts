const sum = (a: number, b: number) => {
  return a + b;
}

const a: string = 'string';
const b: number = 100;
const c: boolean = true;


const obj: {
  foo: number,
  str: string
} = {
  foo: 12,
  str: 'ssss'
}

// 两种定义数组里面全部都是数字的方式
const arr1: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

// 多种类型
const arr3: Array<number | string> = [1, 2, 3, 'sss'];


const arr4: [string, number] = ['src', 123]