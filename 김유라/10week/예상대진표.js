// 선택된 애들이 먼저 라운드 진행
function solution(n, a, b) {
  let round = 1;
  while (Math.ceil(a / 2) !== Math.ceil(b / 2)) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }
  return round;
}
