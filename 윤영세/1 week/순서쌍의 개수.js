// mine
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      answer += n / i == Math.sqrt(n) ? 1 : 2;
    }
  }
  return answer;
}

// other, sqrt = 제곱근을 반환함(예: 9 는 3, 16 = 4), isInteger = Number.isInteger() 메서드는 주어진 값이 정수인지 판별합니다.
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}
