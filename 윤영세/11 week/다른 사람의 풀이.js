function solution(my_string, n) {
  var answer = "";
  answer = my_string.slice(0, n);
  return answer;
}

//other
function solution(m, n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    answer += m[i];
  }
  return answer;
}
