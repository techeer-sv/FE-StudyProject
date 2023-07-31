const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let A = input[0];
let B = input[1];
let C = input[2];
let M = input[3];

let time = 0;
let tired = 0;
let worked = 0;

while (time !== 24) {
  if (A > M) break;
  time++;
  if (tired + A <= M) {
    worked += B;
    tired += A;
  } else {
    tired - C >= 0 ? (tired -= C) : (tired = 0);
  }
}
console.log(worked);
