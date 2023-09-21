export {};

const getMax = (...nums: number[]): number => {
  let max: number = nums[0];
  for (const value of nums) {
    if (value > max) {
      max = value;
    }
  }
  return max;
};

const data: number[] = [7, 2, 4, 9, 5, 6];
const result = getMax(...data);
console.log(result);
