export {};

// デフォルト引数を設定
const add = (num1: number, num2: number = 10): number => {
  const answer: number = num1 + num2;
  return answer;
};

console.log(add(3, 5)); //  8
console.log(add(3)); // 13
