const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");
const sH = new Map();
let answer = "";

for (let i = 0; i < N; i++) {
  sH.set(input[i].split(" ")[0], input[i].split(" ")[1]);
}

for (let i = N; i < input.length; i++) {
  answer += sH.get(input[i]) + "\n";
}
console.log(answer);
