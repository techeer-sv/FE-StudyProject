let input = require("fs").readFileSync("/dev/stdin").toString();
input = Number(input);

const dp = [1, 3];

for (let i = 2; i <= input; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}
console.log(dp[input]);
