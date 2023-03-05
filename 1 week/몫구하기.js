// 오답

function solution(num1, num2) {
  var answer = 0;
  if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
    var answer = num1 / num2;
  }
  return answer;
}

// 정답

function solution(num1, num2) {
  var answer = num1 / num2;
  return Math.floor(answer);
}

// 나누기는 다른 사칙연산과는 다르게, 나눈 결과 값이 소수점이 나오기 떄문에, parseint 또느 math.floor를 써줘야 한다.
