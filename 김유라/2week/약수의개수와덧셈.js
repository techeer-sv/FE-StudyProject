function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    Math.sqrt(i) % 1 == 0 ? (answer -= i) : (answer += i);
  }
  return answer;
}
