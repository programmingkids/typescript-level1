export {};

const box: {
  width: number;
  height: number;
} = {
  width: 12,
  height: 20,
};

// 12
console.log(box.width);
// 20
console.log(box.height);

console.log('=====');

box.width = 30;
box.height = 40;

// 30
console.log(box.width);
// 40
console.log(box.height);
