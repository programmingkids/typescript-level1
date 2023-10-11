export {};

// 以下のような型エイリアス、関数が定義されています
type Calc = (...x: number[]) => number;

const getEvenTotal: Calc = (...x) => {
  let total = 0;
  for (const value of x) {
    if (value % 2 === 0) {
      total += value;
    }
  }
  return total;
};

const data = [3, 6, 7, 9, 2, 8, 5];

// 以下の部分に処理を作成します。これより上部は修正しません
// 関数「getEvenTotal」を呼び出します。引数として、変数「data」を渡します
// 引数をわたす際、関数に適合するようにスプレッド演算子で展開して渡します
