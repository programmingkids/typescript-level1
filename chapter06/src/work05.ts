export {};

// アロー演算子での型注釈
const sayHello = (name: string): string => {
  return 'Hello,' + name;
};

const result: string = sayHello('Alice');
console.log(result);
