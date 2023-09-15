export {};

type Hero = {
  name: string;
  hp: number;
};

type Magician = {
  name: string;
  mp: number;
};

const p1: Hero | Magician = {
  name: 'Bob',
  hp: 20,
};
console.log(p1);

const p2: Hero | Magician = {
  name: 'Meg',
  mp: 30,
};
console.log(p2);
