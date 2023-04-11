function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) answer++;
  }
//   if (n == 12) {
//     return 1;
//   }
  return answer;
}
