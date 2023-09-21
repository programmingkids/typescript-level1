export {};

const showNumber = (data: string | number): void => {
  if (typeof data === 'string') {
    console.log(data.length);
  } else {
    console.log(data);
  }
};

showNumber('Paris'); // 5
showNumber('NewYork'); // 7
showNumber(10); // 10
