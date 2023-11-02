const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  let value = [1];
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      value.push(dp[j] + 1);
    }
  }
  dp[i] = Math.max(...value);
}
console.log(Math.max(...dp));
