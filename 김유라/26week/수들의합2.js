const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
const arr = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
let lt = 0;
let rt = 0;
let answer = 0;
let sum = arr[lt];

while (lt < N && rt < N) {
  if (sum === M) {
    answer++;
    sum += arr[++rt];
  } else if (sum > M) {
    sum -= arr[lt++];
  } else if (sum < M) {
    sum += arr[++rt];
  }
}
console.log(answer);
