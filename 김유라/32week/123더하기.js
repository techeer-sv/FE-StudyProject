const [T, ...numbers] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(T, numbers) {
  const dp = [...Array(11)];
  (dp[1] = 1), (dp[2] = 2), (dp[3] = 4);

  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for (let i = 0; i < T; i++) {
    console.log(dp[numbers[i]]);
  }
}
solution(T, numbers);
