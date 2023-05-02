// mine
function solution(my_string, num1, num2) {
  const result = [...my_string];

  result.splice(num1, 1, my_string[num2]);
  result.splice(num2, 1, my_string[num1]);
  return result.join("");
}
// other 구조분해 destructering
function solution(my_string, num1, num2) {
  let arr = my_string.split("");
  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  return arr.join("");
}