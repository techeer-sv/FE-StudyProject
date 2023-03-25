// 가까운 수
// 문제 설명
// 정수 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  var answer = array[0];
  for (let i = 1; i <= array.length; i++) {
    if (Math.abs(answer - n) > Math.abs(array[i] - n)) answer = array[i];
    else if (Math.abs(answer - n) === Math.abs(array[i] - n))
      answer = Math.min(answer, array[i]);
  }
  return answer;
}
