export {};

// 以下のような型エイリアス、関数が定義されています
type PointXY = {
  x: number;
  y: number;
};

type PointZ = {
  z: number;
};

type Point3D = PointXY & PointZ;

const show3D = ({ x, y, z }: Point3D): void => {
  console.log('x is ' + x);
  console.log('y is ' + y);
  console.log('z is ' + z);
};

// 以下の部分に処理を作成します。これより上部は修正しません
// 適切な引数を渡して、関数「show3D」を呼び出す処理を作成します
const p3: Point3D = {
  x: 10,
  y: 20,
  z: 30,
};
show3D(p3);
