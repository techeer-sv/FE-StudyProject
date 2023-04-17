// mine
function solution(s) {
  var answer = "";
  if (s.length % 2 == 0) {
    answer = s[Math.floor(s.length / 2 - 1)] + s[Math.floor(s.length / 2)];
  } else {
    answer = s[Math.floor(s.length / 2)];
  }
  return answer;
}
//samely with mine
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

// other
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
