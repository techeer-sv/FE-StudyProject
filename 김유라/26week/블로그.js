const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, X] = input.shift();
const visited = input[0];

function solution(N, X, visited) {
  let [max, day, total] = [0, 1, 0];
  for (let i = 0; i < X; i++) {
    total += visited[i];
    max = Math.max(max, total);
  }
  for (let j = 1; j <= N - X; j++) {
    total -= visited[j - 1];
    total += visited[j + X - 1];
    if (total === max) {
      day++;
    } else {
      if (total > max) {
        day = 1;
        max = Math.max(total, max);
      }
    }
  }
  return [max, day];
}
const answer = solution(N, X, visited);
answer[0] === 0 ? console.log("SAD") : answer.map((v) => console.log(v));
