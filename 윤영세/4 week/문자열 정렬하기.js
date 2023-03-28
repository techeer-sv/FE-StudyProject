// // mine
// function solution(my_string) {
//   return my_string
//     .split("")
//     .filter((char) => !isNaN(char))
//     .map((number) => parseInt(number))
//     .sort((a, b) => a - b);
// }

// pratice
function solution(my_string) {
  var answer = [];
  let m = my_string.split("").map(Number);
  // my_string.split("");
  for (let i = 0; i <= my_string.length; i++) {
    if (m[i] == NaN) {
      m.splice();
    } else if (m[i] == Number) {
      m.push();
    }
  }
  console.log(m);
  return answer;
}

console.log(solution("hi12392"));
