export {};

// 関数型の型エイリアスの宣言
type Add = (a: number, b: number) => number;

// Add型の関数宣言
const calc: Add = (x: number, y: number): number => x + y;

console.log(calc(3, 5)); // 8
console.log(calc(2, 7)); // 9
