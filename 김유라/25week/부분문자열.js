const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const string = input.map((i) => i.split(" "));

for (let i = 0; i < string.length; i++) {
  const s = string[i][0];
  const t = string[i][1];
  const queue = s.split("");

  for (x of t) {
    if (x === queue[0]) {
      queue.shift();
    }
  }
  console.log(queue.length === 0 ? "Yes" : "No");
}
