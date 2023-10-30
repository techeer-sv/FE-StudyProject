const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let reverse = input.split("").reverse().join("");

if (reverse === input) {
  return reverse.length;
}

for (let i = 1; i < input.length; i++) {
  let arr = input.split("").slice(i).join("");
  let reverseArr = input.split("").slice(i).reverse().join("");
  if (arr === reverseArr) {
    console.log(input.length + i);
    break;
  }
}
