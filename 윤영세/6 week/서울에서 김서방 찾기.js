// mine
function solution(seoul) {
  var answer = "";
  for (let i = 0; i <= seoul.length - 1; i++) {
    if (seoul[i] == "Kim") {
      answer = `김서방은 ${i}에 있다`;
    }
  }
  return answer;
}

// other, indexOf
function findKim(seoul) {
  var idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}

function findKim(seoul) {
  return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}
