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

const { name, age } = user;

console.log(name);
console.log(age);
