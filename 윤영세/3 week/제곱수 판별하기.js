// mine
function solution(n) {
  const sqrt = Math.sqrt(n);
  return sqrt % 1 === 0 ? 1 : 2;
}

// other
function solution(n) {
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? 1 : 2;
}
