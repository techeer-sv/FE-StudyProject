//mine
function solution(order) {
  var answer = 0;
  var index = order.toString().split("");
  for (let i = 0; i <= index.length; i++) {
    if (index[i] == 3 || index[i] == 6 || index[i] == 9) {
      answer++;
    }
  }
  return answer;
}

// other
function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}

// set has 문법
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split("")
    .filter((num) => mySet.has(Number(num))).length;
}
