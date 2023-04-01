// 직사각형 넓이 구하기
// 문제 설명
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가
// 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  var answer = 0;
  let l1 = Math.sqrt(
    (dots[0][0] - dots[1][0]) ** 2 + (dots[0][1] - dots[1][1]) ** 2
  );
  let l2 = Math.sqrt(
    (dots[0][0] - dots[2][0]) ** 2 + (dots[0][1] - dots[2][1]) ** 2
  );
  let l3 = Math.sqrt(
    (dots[0][0] - dots[3][0]) ** 2 + (dots[0][1] - dots[3][1]) ** 2
  );
  return (l1 * l2 * l3) / Math.max(l1, l2, l3);
}
