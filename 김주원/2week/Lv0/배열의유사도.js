// 배열의 유사도
// 문제 설명
// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      s1[i] == s2[j] ? answer++ : null;
    }
  }
  return answer;
}
