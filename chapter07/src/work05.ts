export {};

// 以下のような型エイリアスが宣言されています
type Score = number[];
type ResultType = 'A' | 'B' | 'C' | 'D';

type Student = {
  name: string;
  age: number;
  scores: Score;
  result: ResultType;
};

// 以下の部分に処理を作成します。これより上部は修正しません
// Student型の変数「s」を宣言して、代入可能な値を代入します
// 代入可能な値であれば、何でも構いません

// Student型の変数「s」を表示します
