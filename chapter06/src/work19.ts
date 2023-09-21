export {};

type Calc = (a: number, b: number) => number;

const c1: Calc = (x, y) => x + y;
const c2: Calc = (x, y) => x * y;

const result1 = c1(5, 3);
console.log(result1); // 8

const result2 = c2(5, 3);
console.log(result2); // 15
