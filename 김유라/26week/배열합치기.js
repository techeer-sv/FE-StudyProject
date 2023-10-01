const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

console.log([...A, ...B].sort((a, b) => a - b).join(" "));
