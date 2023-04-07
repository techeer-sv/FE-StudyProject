function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      answer += " ";
      continue;
    }
    let arr = upper.includes(s[i]) ? upper : lower;
    let index = arr.indexOf(s[i]) + n;
    if (index >= arr.length) {
      index -= arr.length;
    }
    answer += arr[index];
  }
  return answer;
}
