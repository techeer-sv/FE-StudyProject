const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const regex = /^[A-F]?A+F+C+[A-F]?$/;

for (let i = 1; i <= N; i++) {
  const line = input[i];
  let answer = line.match(regex) ? "Infected!" : "Good";
  console.log(answer);
}
