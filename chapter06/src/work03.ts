export {};

function add(num1: number, num2: number): number {
  const answer: number = num1 + num2;
  return answer;
}

// 正しい呼び出し
console.log(add(3, 5));

// error 引数の型が異なる
// console.log(add('a', 'b'));
