// 대문자와 소문자
// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = [];
  my_string
    .split("")
    .forEach((e) =>
      e == e.toUpperCase()
        ? answer.push(e.toLowerCase())
        : answer.push(e.toUpperCase())
    );
  return answer.join("");
}
