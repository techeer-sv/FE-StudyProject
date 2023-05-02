// mine
function solution(emergency) {
  let order = new Map();
  let desc = [...emergency].sort((a, b) => b - a);
  for (let i = 0; i < desc.length; i++) {
    order.set(desc[i], i + 1);
  }
  return emergency.map((v) => order.get(v));
}

//other
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

function solution(emergency) {
  const rank = [...emergency];
  rank.sort((a, b) => b - a);
  return emergency.map((n) => rank.indexOf(n) + 1);
}
