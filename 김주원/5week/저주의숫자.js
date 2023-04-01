// 저주의 숫자 3
// 문제 설명
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.
// 3x 마을 사람들의 숫자는 다음과 같습니다.

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || String(i).includes("3")) n++;
  }
  return n;
}
