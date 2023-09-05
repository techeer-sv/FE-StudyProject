const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let n = Number(input);
let answer = 0;

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let n = Number(input);
  while (n > 0) {
    if (n === 1 || n === 7 || n === 14) {
      answer += 1;
      break;
    } else if (n < 7) {
      n -= 1;
      answer += 1;
    } else if (n < 14) {
      n -= 7;
      answer += 1;
    } else if (n > 14) {
      n -= 14;
      answer += 1;
    }
  }
  console.log(answer);
});
