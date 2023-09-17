const [n, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, I] = n.split(" ").map(Number);
const height = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

for (const x of height) {
  if (I >= x) I++;
  else break;
}
console.log(I);
