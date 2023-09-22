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

// 分割代入とレストパラメータ
const { age, ...other } = user;
console.log(age);
console.log(other);
