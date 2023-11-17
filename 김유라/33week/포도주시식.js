let [n, ...wine] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

wine = wine.map((v) => parseInt(v));
const dp = new Array(parseInt(n)).fill(0);

dp[1] = wine[0];
dp[2] = wine[0] + wine[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 3] + wine[i - 1] + wine[i - 2],
    dp[i - 2] + wine[i - 1]
  );
}
console.log(dp[n]);
