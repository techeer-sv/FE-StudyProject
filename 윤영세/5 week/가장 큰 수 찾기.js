// mine
function solution(array) {
  var answer = [];
  answer = [Math.max(array), array.indexOf(Math.max(array))];
  return answer;
}
