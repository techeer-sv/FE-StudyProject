// mine
function solution(slice, n) {
  var answer = 0;
  if (n <= slice) {
    answer = 1;
  } else {
    answer = Math.ceil(n / slice);
  }
  return answer;
}

// other impressive ans
function solution(slice, n) {
  return Math.ceil(n / slice);
}
