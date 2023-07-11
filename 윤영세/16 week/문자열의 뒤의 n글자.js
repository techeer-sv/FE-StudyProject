//mine
function solution(my_string, n) {
  var answer = [];
  var hope = my_string.split("").reverse()
  for(let i = 0; i < n; i++){
      answer.push(hope[i])
  }
  answer.reverse()
  return answer.join("");
}

//other
function solution(my_string, n) {
  return my_string.substring(my_string.length - n);
}

function solution(my_string, n) {
  var answer = my_string.slice(-1*n);
  return answer;
}