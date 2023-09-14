export {};

type StringOrNumber = string | number;

let value: StringOrNumber = 'Bob';
console.log(value);

value = 120;
console.log(value);

// error
// value = true;
