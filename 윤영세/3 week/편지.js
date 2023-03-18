// mine
function solution(message) {
  var answer = 0;
  message.split("");
  answer = message.length * 2;
  return answer;
}

// other
function solution(message) {
  return message.split("").length * 2;
}
