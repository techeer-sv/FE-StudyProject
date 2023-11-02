const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));
input.shift();
let answer = [];
let sH = new Map(input.map((v) => [v[0], v[1]]));

for (let x of sH.keys()) {
  if (sH.get(x) === "enter") {
    answer.push(x);
  }
}
answer.sort().reverse();
console.log(answer.join("\n"));
