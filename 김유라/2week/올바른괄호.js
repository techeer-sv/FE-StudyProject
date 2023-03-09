function solution(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] == "(" ? (total += 1) : (total -= 1);
    if (total < 0) {
      break;
    }
  }
  return total == 0 ? true : false;
}
