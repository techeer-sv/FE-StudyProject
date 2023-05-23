function solution(a, b, flag) {
  var answer = 0;
  if (flag === true) {
    answer = a + b;
  } else {
    answer = a - b;
  }
  return answer;
}

// other
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}
