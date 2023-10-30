const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let obj = {};
let answer = [];
let size = input.length;

for (let x of input) {
  obj[x] = obj[x] ? obj[x] + 1 : 1;
}

for (let x in obj) {
  let total = obj[x];
  obj[x] = ((total * 100) / size).toFixed(4);
  answer.push(`${x} ${obj[x]}`);
}
console.log(answer.sort().join("\n"));
