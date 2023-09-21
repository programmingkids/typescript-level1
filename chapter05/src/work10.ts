export {};

type PointXY = {
  x: number;
  y: number;
};

type PointZ = {
  z: number;
};

const cubes: (PointXY & PointZ)[] = [
  { x: 10, y: 12, z: 15 },
  { x: 15, y: 10, z: 20 },
  { x: 20, y: 20, z: 15 },
];
console.log(cubes);
