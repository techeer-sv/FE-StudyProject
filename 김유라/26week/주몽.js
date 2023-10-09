const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const arr = input[2].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (arr[i] + arr[j] === M) {
      answer++;
    }
  }
}
console.log(answer);
