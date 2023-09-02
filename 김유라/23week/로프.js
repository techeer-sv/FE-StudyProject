const [n, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let rope = [...arr].sort((a, b) => a - b);
let min = rope[0] * n;

for (let i = 1; i < n; i++) {
  answer = rope[i] * (n - i);
  if (min < answer) {
    min = answer;
  }
}
console.log(min);
