// mine
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}
// other
function solution(str1, str2) {
  if (str1.indexOf(str2) === -1) {
    return 2;
  }
  return 1;
}
