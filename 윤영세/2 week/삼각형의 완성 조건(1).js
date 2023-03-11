// mine
function solution(sides) {
  var answer = 0;
  sides.sort(function (a, b) {
    return b - a;
  });
  if (sides[0] < sides[1] + sides[2]) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
}

// other
function solution(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
