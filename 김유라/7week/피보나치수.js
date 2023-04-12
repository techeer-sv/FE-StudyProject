function Fibonacci(n) {
  let Fibo = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    Fibo[i] = (Fibo[i - 1] + Fibo[i - 2]) % 1234567;
  }
  return Fibo[n];
}

function solution(n) {
  const answer = Fibonacci(n) % 1234567;
  return answer;
}
