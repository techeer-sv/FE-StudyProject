const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = input[0].split("");
let stick = [];
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "(" && arr[i + 1] === ")") {
    answer += stick.length;
    i++;
  } else if (arr[i] === "(") {
    stick.push(arr[i]);
  } else if (arr[i] === ")") {
    stick.pop();
    answer += 1;
  }
}
console.log(answer);
