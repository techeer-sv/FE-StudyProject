const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, K] = input.shift();
const arr = input[0];

let sum = {};
let lt = 0;
let rt = 0;
let answer = 0;

while (lt <= rt && rt < N) {
  while (sum[arr[rt]] === K) {
    sum[arr[lt]]--;
    lt++;
  }
  answer = Math.max(answer, rt - lt + 1);
  sum[arr[rt]] = (sum[arr[rt]] ?? 0) + 1;
  rt++;
}
console.log(answer);
