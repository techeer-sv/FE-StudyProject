function solution(hp) {
  let c = parseInt(hp / 5);
  let c_r = hp % 5;
  let s = parseInt(c_r / 3);
  let w = c_r % 3;
  let answer = c + s + w;
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
