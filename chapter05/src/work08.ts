export {};

type Character = {
  name: string;
  hp: number;
  job: string;
};

const users: Character[] = [
  { name: 'Elsa', hp: 20, job: 'Magician' },
  { name: 'Anna', hp: 10, job: 'Hero' },
  { name: 'Ariel', hp: 30, job: 'Fighter' },
];
console.log(users);
