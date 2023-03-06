// mine
const strlist = ["we", "are", "please"];

function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer[i] = strlist[i].length;
  }
  return answer;
}
// console.log(solution(["we", "are", "please"]));
console.log(strlist.length);

// other
// function solution(strlist) {
//   return strlist.map((el) => el.length);
// }
