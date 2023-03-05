// mine shit
function solution(n, k) {
  var answer = 0;
  if (n % 10 == 0 || n >= 10) {
    var answer = n * 12000 + (k - 1) * 2000;
  } else {
    var answer = n * 12000 + k * 2000;
  }
  return answer;
}

// other impressive answer
function solution(n, k) {
  return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
}

function solution(n, k) {
  var answer = 0;
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
  return answer;
}

// tilt
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
