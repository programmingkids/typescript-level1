export {};

// 配列型の引数
const sum = (nums: number[]): number => {
  let total: number = 0;
  for (const value of nums) {
    total += value;
  }
  return total;
};

const result: number = sum([2, 5, 8, 4, 3, 7, 6]);
console.log(result);
