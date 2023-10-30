const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

let arr = input.shift();
let stack = [];
let answer = [];
let stackNum = 1;

for (let i = 0; i < arr; i++) {
  let num = input[i];
  while (stackNum <= num) {
    stack.push(stackNum);
    stackNum++;
    answer.push("+");
  }
  let pop = stack.pop();
  answer.push("-");
  if (pop !== num) {
    answer = ["NO"];
    break;
  }
}
console.log(answer.join("\n"));
