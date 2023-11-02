const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

[n, ...arr] = input;
n = Number(n);
arr = arr[0].split(" ").map((i) => Number(i));

solution(n, arr);
function solution(n, dp) {
  // 최대값이 한개일 경우
  let max = dp[0];
  for (let i = 1; i < n; i++) {
    if (dp[i - 1] > 0 && dp[i] + dp[i - 1] > 0) {
      dp[i] += dp[i - 1];
    }
    if (max < dp[i]) {
      max = dp[i];
    }
  }
  console.log(max);
}
