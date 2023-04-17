//mine
function solution(n) {
  return "수박".repeat(n).substring(0, n);
}

function solution(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += "박";
    } else {
      result += "수";
    }
  }
  return result;
}

//other
function solution(n) {
  var waterMelon = (n) => "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
  return waterMelon;
}
