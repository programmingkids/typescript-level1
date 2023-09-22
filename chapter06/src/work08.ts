export {};

// オブジェクト型の引数
const showUser = (user: { name: string; age: number }): void => {
  console.log('User name is ' + user.name);
  console.log('User age is ' + user.age);
};

const user: {
  name: string;
  age: number;
} = {
  name: 'Bob',
  age: 17,
};

showUser(user);
