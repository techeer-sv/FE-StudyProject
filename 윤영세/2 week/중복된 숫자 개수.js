// mine
function solution(array, n) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      answer++;
    }
  }
  return answer;
}

// other
function solution(array, n) {
  var answer = 0;
  let Array = array.filter((item) => item === n);
  answer = Array.length;

  return answer;
}
