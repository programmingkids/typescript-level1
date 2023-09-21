export {};

const sum = (...nums: number[]): number => {
  let total = 0;
  for (const value of nums) {
    total += value;
  }
  return total;
};

const result1: number = sum(2, 5, 4, 7);
console.log(result1);

const result2: number = sum(3, 8, 12, 16, 11);
console.log(result2);
