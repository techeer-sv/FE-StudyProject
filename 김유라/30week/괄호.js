const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  let cases = input[i];
  let answer = "YES";
  let stack = [];
  for (let j = 0; j < cases.length; j++) {
    if (cases[j] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        answer = "NO";
        break;
      }
    }
  }
  if (stack.length !== 0) {
    answer = "NO";
  }
  console.log(answer);
}
