const [T, ...cases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(T, cases) {
  for (let i = 0; i < T; i++) {
    const n = cases[i * 3];
    let one = cases[i * 3 + 1].split(" ").map(Number);
    let two = cases[i * 3 + 2].split(" ").map(Number);

    let dp = [[0, one[0], two[0]]];
    for (let j = 1; j < n; j++) {
      dp[j] = [
        Math.max(...dp[j - 1]),
        Math.max(dp[j - 1][0], dp[j - 1][2]) + one[j],
        Math.max(dp[j - 1][0], dp[j - 1][1]) + two[j],
      ];
    }
    console.log(Math.max(...dp[n - 1]));
  }
}
solution(T, cases);
