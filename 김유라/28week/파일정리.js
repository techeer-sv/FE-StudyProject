const [file, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const obj = {};
const answer = [];

for (let x of arr) {
  const [fileName, format] = x.split(".");
  obj[format] ? obj[format]++ : (obj[format] = 1);
}
const formatArr = Object.keys(obj).sort();

for (let format of formatArr) {
  answer.push(`${format} ${obj[format]}`);
}
console.log(answer.join("\n"));
