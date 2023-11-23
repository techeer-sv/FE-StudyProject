const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = input.slice(1, n + 1).map((v) => v.split(" ").map(Number));
const k = Number(input[n + 1]);
const arr = input.slice(n + 2).map((v) => v.split(" ").map(Number));
let sum = new Array(n + 1).fill(null).map((v) => new Array(m + 1).fill(0));

let Sum = () => {
  for (let i = 0; i < n; i++) {
    let temp = 0;
    for (let j = 0; j < m; j++) {
      temp += map[i][j];
      sum[i + 1][j + 1] = temp;
    }
  }
};

let solution = () => {
  let answer = "";
  Sum();

  for (let i = 0; i < arr.length; i++) {
    const [x1, y1, x2, y2] = arr[i];
    let ret = 0;
    for (let j = x1; j <= x2; j++) {
      ret += sum[j][y2] - sum[j][y1 - 1];
    }
    answer += ret + "\n";
  }
  console.log(answer.trim());
};
solution();
