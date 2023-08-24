let fs = require("fs");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const DNA = [];
const nucle = ["A", "C", "G", "T"];
let str = "";
let distance = 0;

for (let i = 1; i <= N; i++) {
  DNA.push([...input[i].trim()]);
}

for (let i = 0; i < M; i++) {
  const cnt = [0, 0, 0, 0];

  for (let x of DNA) {
    if (x[i] === "A") cnt[0] += 1;
    else if (x[i] === "C") cnt[1] += 1;
    else if (x[i] === "G") cnt[2] += 1;
    else if (x[i] === "T") cnt[3] += 1;
  }

  const max = Math.max(...cnt);
  const index = cnt.indexOf(max);

  str += nucle[index];
  distance += N - max;
}
console.log(str);
console.log(distance);
