function solution(s) {
  var answer = "";
  var answer1 = [];
  let answer2 = [];

  let up = s.split("").sort();
  for (let i = 0; i <= up.length - 1; i++) {
    if (s[i] === up[i].toUpperCase()) {
      answer2.push(s[i]);
    } else {
      answer1.push(s[i]);
    }
  }
  answer2.reverse();
  answer1.reverse();

  answer = answer1.join("") + answer2.join("");
  return answer;
}

// other
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .join("");
}
