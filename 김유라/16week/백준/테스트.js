// let input = require("fs").readFileSync("예제.txt").toString().split("\n");
// let fs = require("fs");

// let count = Number(input[0]);
// let numbers = [];

// for (let i = 1; i < input.length; i++) {
//   if (input[i] !== "") {
//     numbers.push(input[i].split(" "));
//   }
// }

// for (let i = 0; i < numbers.length; i++) {
//   let num1 = Number(numbers[i][0]);
//   let num2 = Number(numbers[i][1]);

//   console.log(num1 + num2);
// }
let input = require("fs").readFileSync("예제.txt").toString().split("\n");
let count = Number(input[0]);
let answer = "";

for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);
