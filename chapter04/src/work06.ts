export {};

// User型エイリアス
type User = {
  name: string;
  age: number;
};

// User型の変数
const u1: User = {
  name: 'Micky',
  age: 17,
};
console.log(u1);

// User型の変数
const u2: User = {
  name: 'Minny',
  age: 15,
};
console.log(u2);
