export {};

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

// error
// student.name = "Meg";

// error
// student.score = {
//   science: 90,
//   history: 100,
// };

student.score.english = 50;
student.score.math = 50;
console.log(student);
