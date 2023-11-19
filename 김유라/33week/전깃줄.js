const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let arr = input.map((v) => v.split(" ").map(Number));
let d = Array.from({ length: N }, () => 1);
arr = arr.sort((a, b) => a[0] - b[0]);
let answer = 0;

for (let i = 1; i < N; i++) {
  cnt = 0;
  for (let j = 0; j < i; j++) {
    if (arr[i][1] > arr[j][1]) {
      d[i] = Math.max(d[i], d[j] + 1);
    }
  }
}
answer = N - Math.max(...d);
console.log(answer);
