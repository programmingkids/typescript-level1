export {};

// 両方とも読み込み専用
type Student = {
  readonly name: string;
  readonly age: number;
};

const student: Student = {
  name: 'Meg',
  age: 17,
};

console.log(student.name);
console.log(student.age);

// error 代入不可
// student.name = 'Bob';
// student.age = 18;
