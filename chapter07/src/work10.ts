export {};

// 以下のような型エイリアス、関数が定義されています
type Calc = (x: number[]) => number;

const getTotal: Calc = (a) => {
  let total = 0;
  for (const value of a) {
    total += value;
  }
  return total;
};

const data = [3, 6, 7, 9, 2, 8, 5];

// 以下の部分に処理を作成します。これより上部は修正しません
// 関数「getTotal」を呼び出します。引数として、変数「data」を渡します

// 関数「getTotal」の戻り値を表示します
