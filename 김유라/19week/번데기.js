const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let A = input[0];
let T = input[1];
let bunOrdegi = input[2];

let cnt = 0;
let turn = 0;
let answer = 0;

while (true) {
  turn += 1;
  let arr = [0, 1, 0, 1];
  for (let i = 1; i <= turn + 1; i++) {
    arr.push(0);
  }
  for (let i = 1; i <= turn + 1; i++) {
    arr.push(1);
  }
  for (let x of arr) {
    if (x === bunOrdegi) cnt++;
    if (cnt === T) {
      console.log(answer);
      return;
    }
    answer++;
    answer %= A;
  }
}
