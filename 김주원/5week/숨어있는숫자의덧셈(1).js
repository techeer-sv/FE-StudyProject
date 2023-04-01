// 숨어있는 숫자의 덧셈 (1)
// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let cut = my_string.split("");
  let answer = 0;
  cut.forEach((e) => (e % 1 == 0 ? (answer += parseInt(e)) : null));
  return answer;
}
