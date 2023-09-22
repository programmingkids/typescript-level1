export {};

// 型エイリアスの宣言
type PointXY = {
  x: number;
  y: number;
};

// 型エイリアスの宣言
type PointZ = {
  z: number;
};

// インターセクション型を保持する配列型の変数
const cubes: (PointXY & PointZ)[] = [
  { x: 10, y: 12, z: 15 },
  { x: 15, y: 10, z: 20 },
  { x: 20, y: 20, z: 15 },
];
console.log(cubes);
