export {};

const user: {
  name: string;
  age: number;
  job: string;
} = {
  name: 'Elsa',
  age: 17,
  job: 'Magician',
};

// 分割代入
const { name, age } = user;

console.log(name);
console.log(age);
