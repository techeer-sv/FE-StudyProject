const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ");

function solution(N, K) {
  let queue = [];
  let answer = [];

  for (let i = 0; i < N; i++) {
    queue.push(i + 1);
  }
  let cnt = 1;
  while (queue.length) {
    const shift = queue.shift();
    if (cnt % K === 0) {
      answer.push(shift);
    } else {
      queue.push(shift);
    }
    cnt++;
  }
  console.log(`<${answer.join(", ")}>`);
}
solution(N, K);
