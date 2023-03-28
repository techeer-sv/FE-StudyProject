// mine
function solution(n) {
  var answer = 0;
  var m = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return (answer = parseInt(m));
}

// other
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}

function solution(n) {
  return parseInt((n + "").split("").sort().reverse().join(""));
}
