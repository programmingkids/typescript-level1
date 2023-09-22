export {};

// number、またはstringを保持する配列型の変数
const values: (number | string)[] = ['red', 12, 15, 'blue'];
console.log(values);

values[0] = 20;
values[1] = 'yellow';
console.log(values);
