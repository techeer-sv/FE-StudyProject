const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let maxCnt = 0;
let maxName = "";
const dict = {};

arr.forEach((name) => {
  if (dict[name]) {
    dict[name]++;
  } else {
    dict[name] = 1;
  }
  if (dict[name] === maxCnt && name < maxName) {
    maxName = name;
  } else if (dict[name] > maxCnt) {
    maxName = name;
    maxCnt = dict[name];
  }
});
console.log(maxName);
