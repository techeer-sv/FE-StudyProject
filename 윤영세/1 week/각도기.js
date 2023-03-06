// 내답
function solution(angle) {
  var answer = 0;
  if (angle > 0 && angle < 90) {
    var answer = 1;
  } else if (angle === 90) {
    var answer = 2;
  } else if (angle > 90 && angle < 180) {
    var answer = 3;
  } else if (angle === 180) {
    var answer = 4;
  }
  return answer;
}

// 인상적인
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// 이해 안됨
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
