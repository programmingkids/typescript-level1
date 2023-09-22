export {};

// ユニオン型の変数
let errorCode: 102 | 103 | 104 | 210 | 211 | 320 = 102;
console.log(errorCode);

errorCode = 103;
console.log(errorCode);

errorCode = 211;
console.log(errorCode);

// error 代入不可
// errorCode = 400;
