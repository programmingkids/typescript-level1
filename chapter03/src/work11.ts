export {};

// ユニオン型の変数
let value: string | boolean = 'Bob';
console.log(value);

value = false;
console.log(value);

// error 代入不可
// value = 120;
