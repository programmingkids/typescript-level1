export {};

type User = {
  name: string;
  age: number;
};

const showUser = (user: User): void => {
  console.log('User name is ' + user.name);
  console.log('User age is ' + user.age);
};

const u: User = {
  name: 'Ariel',
  age: 16,
};

showUser(u);
