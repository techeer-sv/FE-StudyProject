function solution(num1, num2) {
  var answer = 0;
  var answer = num1 * num2;
  return answer;
}

// other
function solution(num1, num2) {
  var ans = 0;

  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num2; j++) {
      ans = ans + 1;
    }
  }

  return ans;
}
