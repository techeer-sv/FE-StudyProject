const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((v) => +v);
let arr = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
let answer = 0;

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(" ").map((v) => +v);
  arr[a][b] = true;
  arr[b][a] = true;
}

for (let i = 1; i <= N; i++) {
  for (let j = i + 1; j <= N; j++) {
    if (arr[i][j]) {
      continue;
    }
    for (let k = j + 1; k <= N; k++) {
      if (arr[i][k] || arr[j][k]) {
        continue;
      }
      answer++;
    }
  }
}
console.log(answer);
