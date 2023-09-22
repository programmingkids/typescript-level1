export {};

// ユニオン型を利用した型エイリアスの宣言
type UserRole = '生徒' | '先生' | '校長' | '管理者';

// UserRole型の変数
let user: UserRole = '生徒';
console.log(user);

user = '校長';
console.log(user);
