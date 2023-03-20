// mine
function solution(n) {
  var answer = 0;
  var m = Math.sqrt(n);
  if (Math.sqrt(n) % 1 === 0) {
    answer = (m + 1) * (m + 1);
  } else {
    answer = -1;
  }
  return answer;
}

// 아래 코드가 안돼는 이유가 뭘까요?
function solution(n) {
  var answer = 0;
  var m = Math.sqrt(n);
  if (Math.sqrt(n) % 1 === 0) {
    answer = (n + 1) * (m + 1);
  } else {
    answer = -1;
  }
  return answer;
}

// other
function nextSqaure(n) {
  var result = 0;
  var n = Math.sqrt(n);
  result = Number.isInteger(n) ? Math.pow(n + 1, 2) : "no";
  return result;
}
