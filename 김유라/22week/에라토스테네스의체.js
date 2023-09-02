const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const n = input[0];
const k = input[1];

const num = new Array(input[0]);
const cnt = [];
let prime;

for (let i = 2; i <= n; i++) {
  num[i] = i;
}
for (let i = 2; i <= n; i++) {
  prime = i;
  num[i] = 0;
  cnt.push(i);

  for (let j = i + i; j <= n; j += i) {
    if (num[j] === 0) {
      continue;
    }
    num[j] = 0;
    cnt.push(j);
  }
}
console.log(cnt[k - 1]);
