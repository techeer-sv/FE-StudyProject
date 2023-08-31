const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

let n = input[0];
n = n.replace(/XXXX/g, "AAAA");
n = n.replace(/XX/g, "BB");
console.log(n.split("").includes("X") ? -1 : n);
