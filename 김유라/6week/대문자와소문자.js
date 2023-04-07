function solution(my_string) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const neww = my_string.split("");
  let answer = "";
  for (let i of neww) {
    answer += i === i.toUpperCase(i) ? i.toLowerCase() : i.toUpperCase();
  }
  return answer;
}
