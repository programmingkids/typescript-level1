export {};

// 関数型の型エイリアスを宣言
type Calc = (a: number, b: number) => number;

// Calc型の関数の宣言
const c1: Calc = (x, y) => x + y;
// Calc型の関数の宣言
const c2: Calc = (x, y) => x * y;

const result1 = c1(5, 3);
console.log(result1); // 8

const result2 = c2(5, 3);
console.log(result2); // 15
