export {};

// unknown型の変数
let value: unknown = 120;
console.log(value);

// 代入可能
value = 'Bob';
console.log(value);

// 代入可能
value = {
  name: 'Bob',
  age: 17,
};
console.log(value);
