export {};

type User = {
  name: string;
  age: number;
};

type Address = {
  prefecture: string;
  address: string;
  postalcode: number;
};

const userInfo: User & Address = {
  name: 'John',
  age: 15,
  prefecture: 'Tokyo',
  address: 'Shibuya',
  postalcode: 1231234,
};
console.log(userInfo);
