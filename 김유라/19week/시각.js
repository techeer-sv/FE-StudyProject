const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = input[0];
const K = input[1];
let cnt = 0;

for (let i = 0; i <= N; i++) {
  for (let j = 0; j < 60; j++) {
    for (let k = 0; k < 60; k++) {
      let stringI = i.toString();
      let stringJ = j.toString();
      let stringK = k.toString();

      if (stringI.length === 1) stringI = "0" + stringI;
      if (stringJ.length === 1) stringJ = "0" + stringJ;
      if (stringK.length === 1) stringK = "0" + stringK;

      const time = stringI + stringJ + stringK;
      if (time.includes(K)) cnt++;
    }
  }
}
console.log(cnt);

// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n");

// const [n, k] = input[0].split(" ");
// let count = 0;

// for (let h = 0; h <= n; h++) {
//   for (let m = 0; m < 60; m++) {
//     for (let s = 0; s < 60; s++) {
//       const time =
//         (h < 10 ? "0" + h : "" + h) +
//         (m < 10 ? "0" + m : "" + m) +
//         (s < 10 ? "0" + s : "" + s);
//       if (time.includes(k)) count += 1;
//     }
//   }
// }
// console.log(count);
