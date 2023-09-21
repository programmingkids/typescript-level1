export {};

type Hero = {
  name: string;
  hp: number;
};

type Magician = {
  name: string;
  mp: number;
};

const users: (Hero | Magician)[] = [
  { name: 'Micky', hp: 10 },
  { name: 'Minny', mp: 20 },
  { name: 'Donald', mp: 25 },
];

console.log(users);
