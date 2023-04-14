let str = "Це рядок з декількома числами: 123, 45 та 6.";
let regex = /(\d+)/g;
let matches = str.match(regex);
console.log(matches);

let numbers = matches.map((num) => parseInt(num));
console.log(numbers);
