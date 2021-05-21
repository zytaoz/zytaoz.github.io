const nums = [1, 12, 123];

const res = nums.find(i => i > 0);

const nums1 = res as number;
const nums2 = <number>res;

const ss = nums1 * nums1;
const ss1 = nums2 * nums2;


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

// func1({
//   name: '桃子', 
//   age: 30,
//   class: 5
// })

