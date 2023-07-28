const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];
const c = input[2];
const d = input[3];
const e = input[4];
const f = input[5];

for (let i = -999; i < 1000; i++) {
  for (let j = -999; j < 1000; j++) {
    if (a * i + b * j === c && d * i + e * j === f) {
      console.log(i + " " + j);
      break;
    }
    // return i + "" + j;
  }
}
