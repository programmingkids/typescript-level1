export {};

const colors: string[] = ['red', 'blue', 'yello', 'pink'];

// レストパラメータで残りの要素を代入
const [a, b, ...other] = colors;
console.log(a);
console.log(b);
console.log(other);
