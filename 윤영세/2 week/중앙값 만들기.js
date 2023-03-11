// mine
function solution(array) {
  var answer = 0;
  array.sort(function (a, b) {
    return a - b;
  });
  answer = array[Math.floor(array.length / 2)];
  return answer;
}

// other
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
