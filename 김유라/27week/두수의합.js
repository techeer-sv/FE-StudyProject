const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const x = Number(input[2]);
const arr = input[1]
  .trim()
  .split(" ")
  .map((x) => Number(x))
  .sort((a, b) => a - b);

let cnt = 0;
let sum = 0;
let start = 0;
let end = n - 1;

while (start !== end) {
  sum = arr[start] + arr[end];
  if (sum === x) {
    cnt++;
    start++;
  } else if (sum > x) {
    end--;
  } else {
    start++;
  }
}
console.log(cnt);
