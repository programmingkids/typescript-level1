export {};

// 引数にオプションパラメータを設定
const sayHello = (name?: string): string => {
  if (name === undefined) {
    return 'Who are you?';
  } else {
    return 'Hello,' + name;
  }
};

console.log(sayHello('Donald')); // Hello, Donald
console.log(sayHello('Daizy')); // Hello, Daizy
console.log(sayHello()); // Who are you?
