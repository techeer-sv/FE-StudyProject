const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
let dp = [];

for (let i = 0; i < arr.length; i++) {
  dp[i] = arr[i];
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[i] < dp[j] + arr[i]) {
      dp[i] = dp[j] + arr[i];
    }
  }
}
console.log(Math.max(...dp));
