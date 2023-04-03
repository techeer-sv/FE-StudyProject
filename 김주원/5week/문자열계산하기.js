// 문자열 계산하기
// 문제 설명
// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때,
// 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = my_string.split(" ");
  let calc = parseInt(answer[0]);
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == "+") {
      calc += parseInt(answer[i + 1]);
    } else if (answer[i] == "-") {
      calc -= parseInt(answer[i + 1]);
    }
  }
  return calc;
}
