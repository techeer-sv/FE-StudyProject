// 잘라서 배열로 저장하기
// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때,
// my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  var answer = [];
  for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
    answer.push(my_str.substr(n * i, n));
  }
  return answer;
}
