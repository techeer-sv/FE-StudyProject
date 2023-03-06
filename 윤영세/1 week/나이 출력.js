// mine
function solution(age) {
  var answer = 0;
  var answer = 2022 - age + 1;
  return answer;
}

// other, use getFullYear
function solution(age) {
  return new Date().getFullYear() - age + 1;
}
