const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, X] = input.shift();
const arr = input[0];

let answer = 0;
let sum = 0;
let cnt = 1;

for (let i = 0; i < X; i++) {
  sum += arr[i];
  answer = sum;
}

for (let i = X; i < arr.length; i++) {
  sum += arr[i] - arr[i - X];
  if (sum >= answer) {
    if (sum === answer) {
      cnt++;
    } else {
      answer = sum;
      cnt = 1;
    }
  }
}

if (answer === 0) console.log("SAD");
else {
  console.log(answer + "\n" + cnt);
}
