const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nameMap = new Map();
const numMap = new Map();
let answer = "";

for (let i = 1; i <= N; i++) {
  nameMap.set(i, input[i]);
  numMap.set(input[i], i);
}

for (let i = N + 1; i < input.length; i++) {
  if (isNaN(input[i])) {
    answer += numMap.get(input[i]) + "\n";
  } else {
    answer += nameMap.get(+input[i]) + "\n";
  }
}
console.log(answer);
