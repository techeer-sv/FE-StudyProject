// mine
function solution(my_string, letter) {
  var answer = "";
  answer = my_string.replaceAll(letter, "");
  return answer;
}

// other
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

// replaceAll이 아닌 replace만 쓰게 되면, 처음 조건을 만족하는 것(글자) 하나만 잘라낸다.
function solution(my_string, letter) {
  var answer = "";
  answer = my_string.replace(letter, "");
  return answer;
}
