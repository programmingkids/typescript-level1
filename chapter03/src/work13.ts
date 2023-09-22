export {};

// 型エイリアスの宣言
type StringOrNumber = string | number;

// StringOrNumber型の変数
let value: StringOrNumber = 'Bob';
console.log(value);

value = 120;
console.log(value);

// error 代入不可
// value = true;
