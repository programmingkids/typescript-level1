export {};

// 以下のような型エイリアスが宣言されています
type ScoreType = number[];

// 以下の部分に処理を作成します。これより上部は修正しません
// ScoreType型の変数「scores」を宣言して、代入可能な値を代入します
// 代入可能な値であれば、何でも構いません
const scores: ScoreType = [10, 20, 30, 40];
// 繰り返し処理を利用して、変数「scores」の全要素を合計して、表示します
const total = scores.reduce((r, e) => r + e, 0);
console.log(total);
