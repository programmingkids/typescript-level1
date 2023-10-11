export {};

// 以下のような型エイリアスが宣言されています
type SubjectType = '国語' | '数学' | '英語' | '理科' | '社会';

type ScoreType = [SubjectType, number];

type ScoresType = ScoreType[];

type Student = {
  name: string;
  favorite: SubjectType;
  scores: ScoresType;
};

// 以下の部分に処理を作成します。これより上部は修正しません
// Student型の変数「s」を宣言して、代入可能な値を代入します
// 代入可能な値であれば、何でも構いません

// 変数「s」を表示します
