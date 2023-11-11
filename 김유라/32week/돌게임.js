const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let x of input) {
  console.log(x % 2 === 0 ? "CY" : "SK");
}
