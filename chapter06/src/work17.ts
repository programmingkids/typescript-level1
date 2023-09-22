export {};

// 型エイリアスの宣言
type Person = {
  name: string;
  age: number;
  job: string;
};

// Person型の引数を分割代入で受け取る
const showPerson = ({ name, age, job }: Person): void => {
  console.log('name => ' + name);
  console.log('age  => ' + age);
  console.log('job  => ' + job);
};

const p: Person = {
  name: 'Buzz',
  age: 25,
  job: 'Space Fighter',
};

showPerson(p);
