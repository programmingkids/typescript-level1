export {};

const sayHello = (name: string): string => {
  return 'Hello,' + name;
};

const result: string = sayHello('Alice');
console.log(result);
