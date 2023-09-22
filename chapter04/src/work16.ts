export {};

// Box型エイリアス
type Box = {
  width: number;
  height: number;
};

// Color型エイリアス
type Color = {
  background: string;
  border: string;
};

// インターセクション型Box
type ColorBox = Box & Color;

// ColorBox型の変数
const colorBox: ColorBox = {
  width: 100,
  height: 80,
  background: 'red',
  border: 'orange',
};
console.log(colorBox);
