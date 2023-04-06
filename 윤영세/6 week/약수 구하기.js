// mine
function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }
  return answer;
}

// other
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}
