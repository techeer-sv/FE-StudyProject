// mine
function solution(n) {
  var answer = [];
  let m = n.toString().split("").reverse().map(Number);

  return (answer = m);
}

// other
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((o) => (o = parseInt(o)));
}
