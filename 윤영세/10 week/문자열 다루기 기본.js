function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((c) => !isNaN(c));
  } else {
    return false;
  }
}

function solution(s) {
  var answer = true;

  if (s.length === 4 || s.length === 6) {
    if (typeof Number(s) === "number") {
      answer;
    } else {
      !answer;
    }
  } else {
    !answer;
  }

  return answer;
}

//other
function alpha_string46(s) {
  return s.length == 4 || s.length == 6 ? !isNaN(s) : false;
}

function alpha_string46(s) {
  var temp = parseInt(s);
  if (s == temp) {
    return true;
  }
  return false;
}
