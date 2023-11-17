let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let test = Number(input.shift());
let dp = Array.from(Array(10001), () => Array(4).fill(0));

dp[1][1] = 1;
dp[2][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for (let i = 4; i <= 10000; i++) {
  dp[i][1] = dp[i - 1][1];
  dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
  dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
}

for (let j = 0; j < test; j++) {
  let n = Number(input.shift());
  console.log(dp[n][1] + dp[n][2] + dp[n][3]);
}
