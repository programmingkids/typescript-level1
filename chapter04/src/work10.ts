export {};

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

// error
// student.name = 'Bob';
// student.age = 18;
