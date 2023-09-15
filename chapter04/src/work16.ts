export {};

type Box = {
  width: number;
  height: number;
};

type Color = {
  background: string;
  border: string;
};

type ColorBox = Box & Color;

const colorBox: ColorBox = {
  width: 100,
  height: 80,
  background: 'red',
  border: 'orange',
};
console.log(colorBox);
