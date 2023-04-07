// mine
function solution(my_string) {
  var answer = "";
  answer = my_string.toLowerCase().split("").sort().join("");
  return answer;
}

// other
function solution(s) {
  return [...s.toLowerCase()].sort().join("");
}

function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}
