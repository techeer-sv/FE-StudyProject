// mine
function solution(n) {
  var answer = 0;
  let m = n.toString().split("");
  // parseInt(n.toString().split(''));
  for (let i = 0; i < m.length; i++) {
    answer += parseInt(m[i]);
  }

  return answer;
}

// other
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
