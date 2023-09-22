export {};

// Uesr型エイリアス
type User = {
  name: string;
  age: number;
};

// Address型エイリアス
type Address = {
  prefecture: string;
  address: string;
  postalcode: number;
};

// インターセクション型の変数
const userInfo: User & Address = {
  name: 'John',
  age: 15,
  prefecture: 'Tokyo',
  address: 'Shibuya',
  postalcode: 1231234,
};
console.log(userInfo);
