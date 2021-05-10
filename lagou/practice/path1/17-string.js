const name = 'tzy';
const gender = true;

function func1(strings) {
  // 如果直接输出传递进来的参数，会返回一个基于字符串模板进行分割的数组
  return strings;
}
const result1 = func1`hi, ${name} is a ${gender}`;
console.log(result1); // => [ 'hi, ', ' is a ', '' ]


function func2(strings, name, gender) {
  console.log(name); // => 字符串模板的第一位，就是对应的 name => tzy
  console.log(gender); // => 字符串模板的第二位，就是对应的 gender => true
  return strings;
}
const result2 = func2`hi, ${name} is a ${gender}`;

function func3(str, name, gender) {
  gender = gender ? 'man' : 'woman';
  return str[0] + name + str[1] + gender + str[2]
}
const result3 = func3`hi, ${name} is a ${gender}`;
console.log(result3); // => hi, tzy is a man