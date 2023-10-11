export {};

// 以下のような型エイリアスが宣言されています
type JobType = '勇者' | '魔法使い' | '戦士' | '遊び人';

type Player = {
  name: string;
  age: number;
  job: JobType;
};

// 以下の部分に処理を作成します。これより上部は修正しません
// Player型の変数「p」を宣言して、代入可能な値を代入します
// 代入可能な値であれば、何でも構いません

// Player型の変数「p」を表示します
