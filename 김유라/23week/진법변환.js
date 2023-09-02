const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let answer = parseInt(input[0], Number(input[1]));
console.log(answer);
