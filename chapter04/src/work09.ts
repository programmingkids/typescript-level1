export {};

const user: {
  name: string;
  readonly age: number;
} = {
  name: 'Micky',
  age: 17,
};

console.log(user.name);
console.log(user.age);

user.name = 'Donald';
console.log(user.name);

// error
// user.age = 16;
