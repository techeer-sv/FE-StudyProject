const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);
let answer = 0;
while (n > 0)
  if (n === 1 || n === 3) {
    answer = -1;
    break;
  } else if (n % 2 === 1 || n % 5 === 0) {
    answer += 1;
    n -= 5;
  } else if (n % 2 === 0) {
    answer += 1;
    n -= 2;
  }
console.log(answer);
