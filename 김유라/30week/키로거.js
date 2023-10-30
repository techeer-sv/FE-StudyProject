const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const L = Number(input[0]);

for (let i = 1; i <= L; i++) {
  let password = input[i].split("");
  let front = [];
  let back = [];
  for (let j = 0; j < password.length; j++) {
    switch (password[j]) {
      case "<":
        if (front.length > 0) back.push(front.pop());
        break;
      case ">":
        if (back.length > 0) front.push(back.pop());
        break;
      case "-":
        if (front.length > 0) front.pop();
        break;
      default:
        front.push(password[j]);
        break;
    }
  }
  console.log(front.join("") + back.reverse().join(""));
  //   console.log(back.join(""));
  //   console.log(back.reverse().join(""));
}
