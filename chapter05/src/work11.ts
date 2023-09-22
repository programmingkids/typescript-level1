export {};

// 読み込み専用のstringを保持する配列
const fruits: readonly string[] = ['apple', 'orange', 'banana', 'melon'];
console.log(fruits);

// error
// fruits[0] = "grape";

// error
// fruits[4] = 'peach';
