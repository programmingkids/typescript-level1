export {};

const colors: string[] = ['red', 'blue', 'yello', 'pink'];

const [a, b, ...other] = colors;
console.log(a);
console.log(b);
console.log(other);
