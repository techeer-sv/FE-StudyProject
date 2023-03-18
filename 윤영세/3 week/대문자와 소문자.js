//
function solution(my_string) {
  let answer = "";
  for (let i of my_string) {
    if (i === i.toUpperCase()) {
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  return answer;
}

const solution = (my_string) =>
  [...my_string]
    .map((a) =>
      a.charCodeAt() >= 65 && a.charCodeAt() < 97
        ? a.toLowerCase()
        : a.toUpperCase()
    )
    .join("");
