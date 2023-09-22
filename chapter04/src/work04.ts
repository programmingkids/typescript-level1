export {};

// ageはオプショナルパラメータ
const user: {
  name: string;
  age?: number;
} = {
  name: 'Micky',
};

// Micky
console.log(user.name);
// undefined
console.log(user.age);

console.log('=====');

// 代入可能
user.age = 17;

// 17
console.log(user.age);
