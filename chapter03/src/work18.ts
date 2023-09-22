export {};

// 以下のような型エイリアスが宣言されています
type StatusCode = 100 | 200 | 300 | 400;

// StatusCode型の変数「status」を宣言して、代入可能な値を代入します
// 代入可能な値であれば、何でも構いません
const status: StatusCode = 100;
// StatusCode型の変数「status」を表示します
console.log(status);
