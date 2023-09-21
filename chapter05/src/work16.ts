export {};

// 以下のような型を宣言しています
type Player = {
  name: string;
  hp: number;
  mp: number;
};

// 以下の部分に処理を作成します。これより上部は修正しません

// Player型を保持する配列型の変数「players」を作成して、配列の要素として適切な値を代入します
const players: Player[] = [
  { name: 'Bob', hp: 20, mp: 20 },
  { name: 'Tom', hp: 10, mp: 30 },
  { name: 'Ron', hp: 15, mp: 30 },
];
// 変数「players」を表示します
console.log(players);
