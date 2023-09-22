export {};

// 複雑な読み込み専用
const student: {
  readonly name: string;
  readonly score: {
    english: number;
    math: number;
  };
} = {
  name: 'Bob',
  score: {
    english: 90,
    math: 85,
  },
};

console.log(student);

// error 代入不可
// student.name = "Meg";

// error 代入不可
// student.score = {
//   science: 90,
//   history: 100,
// };

// これは代入可能
student.score.english = 50;
student.score.math = 50;
console.log(student);
