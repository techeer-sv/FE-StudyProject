const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
let dp = [];

for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (A[i] < A[j] && max < dp[j]) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}
console.log(Math.max(...dp));
