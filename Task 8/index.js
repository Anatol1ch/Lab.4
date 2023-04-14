let words = ["стик", "столик", "ключик", "ікра", "абрикос"];
let suffixRegex = /ик([\s.,:!]|$)/g;
let resultWords = words.map((word) => word.replace(suffixRegex, "$1"));
console.log(resultWords);
