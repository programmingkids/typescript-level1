export {};

// インデックスシグネチャー
const user: {
  [key: string]: string;
} = {
  name: 'Bob',
  hobby: 'Tennis',
  address: 'Tokyo',
};

console.log(user.name);
console.log(user.hobby);
console.log(user.address);

// error 代入不可
// user.age = 17;
