// mine
function solution(rsp) {
  var answer = [];
  parseInt(rsp.split(""));
  for (let i = 0; i <= rsp.length; i++) {
    if (rsp[i] == 2) {
      answer.push("0");
    } else if (rsp[i] == 0) {
      answer.push("5");
    } else if (rsp[i] == 5) {
      answer.push("2");
    }
  }
  return answer.join("");
}

// other
function solution(rsp) {
  const rspWin = { 2: 0, 0: 5, 5: 2 };
  return [...rsp].map((x) => rspWin[x]).join("");
}

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
