// mine
function solution(num, k) {
  var answer = 0;
  var nb = num
    .toString()
    .split("")
    .map((n) => Number(n));
  for (let i = 0; i <= nb.length; i++) {
    if (nb[i] == k) {
      answer = i + 1;
      break;
    } else {
      answer = -1;
    }
  }
  return answer;
}

// other
function solution(num, k) {
  let ind = ("" + num).indexOf(k);
  return ind === -1 ? -1 : ind + 1;
}

function solution(num, k) {
  var answer = num.toString();
  if (answer.includes(k)) {
    return answer.indexOf(k) + 1;
  } else {
    return -1;
  }
}
