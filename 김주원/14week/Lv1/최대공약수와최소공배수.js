// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 최대공약수와 최소공배수
// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
  let answer = [];
  let minNum = Math.min(n, m);
  let maxNum = Math.max(n, m);
  answer[0] = gcd(minNum, maxNum);
  answer[1] = lcm(minNum, maxNum);
  return answer;
}
function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
function lcm(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum);
}
