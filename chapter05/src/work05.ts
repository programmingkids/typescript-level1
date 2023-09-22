export {};

// 多次元配列 => 配列の中に配列
const data: string[][] = [
  ['Tokyo', 'Japan'],
  ['London', 'England'],
  ['Paris', 'France'],
];
console.log(data);

data[0] = ['Rome', 'Italy'];
console.log(data);

// error 代入不可
// data[0] = 'XXX';

// error 代入不可
// data[0] = [10, 20];
