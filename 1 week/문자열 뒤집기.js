// mine
function solution(my_string) {
  var answer = "";
  answer = Array.from(my_string).reverse().join("");
  return answer;
}

// // // other
// // function solution(my_string) {
// //   return my_string.split("").reverse().join("");
// // }

// // 스프래드 문법
// function solution(my_string) {
//   var answer = [...my_string].reverse().join("");
//   return answer;
// }

console.log(solution["water"]);
