export {};

// 以下のような型を宣言しています
type Hero = {
  name: string;
  hp: number;
  mp: number;
  job: string;
};

// 以下の部分に処理を作成します。これより上部は修正しません

// Hero型の変数「hero」を作成して、各プロパティに適切な値を代入します
const hero: Hero = {
  name: 'Bob',
  hp: 20,
  mp: 20,
  job: 'Hero',
};
// 変数「hero」を表示します
console.log(hero);
