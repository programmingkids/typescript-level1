export {};

type Add = (a: number, b: number) => number;

const calc: Add = (x: number, y: number): number => x + y;

console.log(calc(3, 5)); // 8
console.log(calc(2, 7)); // 9
