export {};

const student = {
  name: 'Bob',
  score: {
    english: 90,
    math: 85,
  },
} as const;

console.log(student);

// error
// student.name = 'Meg';

// error;
// student.score = {
//   english: 50,
//   math: 50,
// };

// error
// student.score.english = 100;
// student.score.math = 100;
