export {};

// 以下のような型を宣言しています
type PointXY = {
  x: number;
  y: number;
};

type PointZ = {
  z: number;
};

type Point3D = PointXY & PointZ;

// 以下の部分に処理を作成します。これより上部は修正しません
// Point3D型の変数「cube」を作成して、各プロパティに適切な値を代入します

// 変数「cube」を表示します
