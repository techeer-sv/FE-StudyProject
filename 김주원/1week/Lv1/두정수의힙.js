// 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
  var answer = 0;
  if (b - a >= 0) {
    for (let i = 0; i <= b - a; i++) {
      answer = answer + a + i;
    }
  } else {
    for (let i = 0; i <= a - b; i++) {
      answer = answer + b + i;
    }
  }
  return answer;
}
