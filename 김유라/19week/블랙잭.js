let fs = require("fs");
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
input[0] = input[0].split(" ");
const cards = input[1].split(" ").map((el) => Number(el));
const N = Number(input[0][0]);
const M = Number(input[0][1]);
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      const gap = M - sum;
      if (gap >= 0 && answer <= sum) {
        answer = sum;
      }
    }
  }
}
console.log(answer);
