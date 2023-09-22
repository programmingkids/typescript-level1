export {};

// 以下のような型エイリアスが宣言されています
type ColorType = string[];

// 以下の部分に処理を作成します。これより上部は修正しません
// ColorType型の変数「colors」を宣言して、代入可能な値を代入します
// 代入可能な値であれば、何でも構いません
const colors: ColorType = ['red', 'blue', 'white', 'pink'];

// 繰り返し処理を利用して、変数「colors」の全要素を表示します
colors.forEach((value) => console.log(value));
