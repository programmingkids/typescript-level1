export {};

type Player = {
  name: string;
  hp: number;
  job?: string | number;
};

const p1: Player = {
  name: 'Bell',
  hp: 20,
  job: 'Hero',
};
console.log(p1);

const p2: Player = {
  name: 'Ariel',
  hp: 30,
};
console.log(p2);
