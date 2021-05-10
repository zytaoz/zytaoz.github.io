function func(a, ...b) {
  console.log(a); // => 1
  console.log(b); // => [ 2, 3, 4 ]
}

func(1, 2, 3, 4);

const arr = [1, 2, 3, 4];
console.log(...arr);

function fn1(val) {
  console.log(...val);
}
fn1(arr);

function fn2(a = 1, b) {
  console.log(a, b);
}

fn2()
fn2(2)