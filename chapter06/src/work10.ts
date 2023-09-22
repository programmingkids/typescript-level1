export {};

// ユニオン型の戻り値
const getEven = (num: number): number | boolean => {
  if (num % 2 === 0) {
    return num;
  } else {
    return false;
  }
};

const result1: number | boolean = getEven(6);
console.log(result1); // 6

const result2: number | boolean = getEven(5);
console.log(result2); // false
