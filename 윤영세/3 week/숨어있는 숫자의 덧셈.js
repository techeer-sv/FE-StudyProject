// mine
function solution(my_string) {
  var answer = 0;
  my_string.split("");
  for (let i = 0; i <= my_string.length; i++) {
    if (my_string[i] > 0) {
      answer += parseInt(my_string[i]);
    }
  }
  return answer;
}

// other
function solution(my_string) {
  return my_string
    .replaceAll(/[^\d]/g, "")
    .split("")
    .map((v) => +v)
    .reduce((a, v) => a + v, 0);
}

function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .reduce((a, b) => parseInt(a) + parseInt(b));
}
