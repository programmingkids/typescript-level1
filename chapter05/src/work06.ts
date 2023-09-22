export {};

const data: (string | number)[][] = [
  ['国語', 90],
  ['英語', 92],
  ['数学', 95],
];
console.log(data);

data[0] = ['理科', 80];
console.log(data);

// error 代入不可
// data[0] = "xxx";

// error 代入不可
// data[0] = [true,false];
