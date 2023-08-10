const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = [];
for (x of input) {
  if (x === "END") break;
  answer.push(x.split("").reverse().join(""));
}
console.log(answer.join("\n"));
