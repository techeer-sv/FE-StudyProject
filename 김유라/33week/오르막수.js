const input = Number(require("fs").readFileSync("/dev/stdin").toString());

let dp = Array.from(Array(input + 1), () => []);
dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
dp[3] = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

for (let i = 4; i <= input; i++) {
  for (let j = 0; j < 10; j++) {
    dp[i][j] = 0;
    for (let k = 0; k <= j; k++) {
      dp[i][j] = (dp[i][j] + dp[i - 1][k]) % 10007;
    }
  }
}
console.log(
  dp[input].reduce((r, v) => {
    return (r + v) % 10007;
  }, 0)
);
