export {};

// 戻り値のない関数の場合voidを指定
const sayHello = (name: string): void => {
  console.log('Hello,' + name);
};

sayHello('Anna');
