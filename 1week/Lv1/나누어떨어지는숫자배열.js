// 나누어 떨어지는 숫자 배열
// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) answer.push(arr[i]);
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  if (answer.length == 0) {
    return [-1];
  }
  return answer;
}
