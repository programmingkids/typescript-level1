export {};

function add(num1: number, num2: number): number {
  const answer: number = num1 + num2;
  return answer;
}

console.log(add(3, 5));

// error
// console.log(add('a', 'b'));
