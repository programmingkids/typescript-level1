export {};

// ユニオン型の変数
let value: string | number = 'Hello';
console.log(value);

// 代入可能
value = 120;
console.log(value);

// error 代入不可
// value = false;
