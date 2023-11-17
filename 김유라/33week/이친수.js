const input = Number(require("fs").readFileSync("/dev/stdin").toString());

const dp = new Array(input + 1);

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < dp.length; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}
console.log(String(dp[input]));
