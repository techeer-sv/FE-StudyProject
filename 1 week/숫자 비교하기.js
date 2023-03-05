// 내 답
function solution(num1, num2) {
  var answer = 0;
  if (num1 === num2) {
    var answer = 1;
  } else if (num1 != num2) {
    var answer = -1;
  }
  return answer;
}

// 다른 사람 문제중, 인상깊었던 것
function solution(num1, num2) {
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}
