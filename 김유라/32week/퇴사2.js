const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(n);
let inputs = arr.map((input) => input.split(" ").map(Number));

function solution(N, inputs) {
  let dp = Array(N + 1).fill(0);
  let max = 0;
  for (let i = 0; i < N; i++) {
    max = Math.max(max, dp[i]);
    let [day, pay] = inputs[i];
    if (i + day <= N) {
      dp[i + day] = Math.max(dp[i + day], max + pay);
    }
  }
  return Math.max(...dp);
}
console.log(solution(N, inputs));
