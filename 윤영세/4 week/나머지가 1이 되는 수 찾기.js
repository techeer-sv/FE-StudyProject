// // mine
// function solution(n) {
//   var answer = 0;
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 1) {
//       answer = i;
//       break;
//     }
//   }
//   return answer;
// }

// // other
// function solution(n, x = 1) {
//   while (x++) {
//     if (n % x === 1) {
//       return x;
//     }
//   }
// }

function solution(my_string) {
  var answer = [];
  let m = my_string.split("").map(Number);
  my_string.split("");
  for (let i = 0; i <= 9; i++) {
    if (m == i) {
      answer.push(i);
    }
  }
  console.log(m);
  return answer;
}

console.log(solution("hi12392"));
