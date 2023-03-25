function solution(s) {
  let answer = "";
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 0) {
      index = 0;
      answer += " ";
    } else {
      if (index % 2 == 0) {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
      index++;
    }
  }
  return answer;
}
