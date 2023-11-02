const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let top = input[1].split(" ");
let stack = [];
let answer = [];

for (let i = 0; i < N; i++) {
  const current = { index: i + 1, height: Number(top[i]) };
  if (!stack.length) {
    stack.push(current);
    answer.push(0);
    continue;
  }
  if (stack[stack.length - 1].height < current.height) {
    while (stack.length) {
      if (stack[stack.length - 1].height > current.height) {
        break;
      } else {
        stack.pop();
      }
    }
    !stack.length ? answer.push(0) : answer.push(stack[stack.length - 1].index);
    stack.push(current);
  } else {
    answer.push(stack[stack.length - 1].index);
    stack.push(current);
  }
}
console.log(answer.join(" "));
