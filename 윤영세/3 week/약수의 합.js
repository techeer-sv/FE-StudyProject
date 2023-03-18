// mine
function solution(n) {
  var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      answer += i;
    }
  }
  return answer;
}

// other
function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer;
}
