export {};

// すべて読み込み専用
const student = {
  name: 'Bob',
  score: {
    english: 90,
    math: 85,
  },
} as const;

console.log(student);

// error 代入不可
// student.name = 'Meg';

// error 代入不可
// student.score = {
//   english: 50,
//   math: 50,
// };

// error 代入不可
// student.score.english = 100;
// student.score.math = 100;
