const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const num = input.map((i) => i.split(" ").map(Number))[0];
let answer = 0;

for (let i = 0; i < N; i++) {
  if (num[i] === 1) {
    continue;
  } else {
    let cnt = 0;
    for (let j = 2; j < num[i]; j++) {
      if (num[i] % j === 0) cnt++;
    }
    if (cnt === 0) answer++;
  }
}
console.log(answer);
