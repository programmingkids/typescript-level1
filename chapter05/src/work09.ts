export {};

// 型エイリアスの宣言
type Hero = {
  name: string;
  hp: number;
};

// 型エイリアスの宣言
type Magician = {
  name: string;
  mp: number;
};

// Hero、またはMagician型を保持する配列型の変数
const users: (Hero | Magician)[] = [
  { name: 'Micky', hp: 10 },
  { name: 'Minny', mp: 20 },
  { name: 'Donald', mp: 25 },
];

console.log(users);
