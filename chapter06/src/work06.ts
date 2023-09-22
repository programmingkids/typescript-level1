export {};

// アロー演算子での型注釈
const checkEven = (num: number): boolean => num % 2 === 0;

const result1 = checkEven(6);
console.log(result1); // true

const result2 = checkEven(7);
console.log(result2); // false
