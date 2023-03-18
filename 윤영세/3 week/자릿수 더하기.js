// mine
function solution(n) {
  var numArray = n
    .toString()
    .split("")
    .map((x) => parseInt(x));
  answer = numArray.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

// other
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
