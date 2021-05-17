function fn1(a: number, b:number): string {
  return 'text';
}

function fn2(a: number, b?: number): string {
  return 'text';
}

function fn3(a: number, b: number = 100): string {
  return 'text';
}

const fn4: (a: number, b: number) => number = (a: number, b:number): number => {
  return a + b;
}


function fn5 (val:any) {
  return val;
}

fn1(100, 300);
fn2(100);
fn3(100);
fn4(100, 300);