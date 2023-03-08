//제곱근을 1로 나눈 나머지 값이 0이면 해당 값의 약수 개수는 홀수이고
//나머지값이 0이 아니라면 개수가 짝수이다.
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    Math.sqrt(i) % 1 == 0 ? (answer -= i) : (answer += i);
  }
  return answer;
}
