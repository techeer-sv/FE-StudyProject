const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  if (input.includes(0) && input.includes(1)) {
    let one = input.split(0).filter((el) => el !== "").length;
    let zero = input.split(1).filter((el) => el !== "").length;
    return one < zero ? one : zero;
  } else return 0;
}
console.log(solution(input));
