// mine
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// other
function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
}