export {};

// 型エイリアスの宣言
type User = {
  name: string;
  age: number;
};

// 型エイリアスの引数
const showUser = (user: User): void => {
  console.log('User name is ' + user.name);
  console.log('User age is ' + user.age);
};

const u: User = {
  name: 'Ariel',
  age: 16,
};

showUser(u);
