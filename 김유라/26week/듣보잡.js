const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ");
const noSee = new Set();
const noHear = new Set();
let answer = [];

for (i = 0; i < input.length; i++) {
  i < n ? noSee.add(input[i]) : noHear.add(input[i]);
}
noHear.forEach((i) => {
  if (noSee.has(i)) {
    answer.push(i);
  }
});
answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));
