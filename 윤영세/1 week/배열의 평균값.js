// mine
function solution(arr) {
  var answer = 0;
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  answer = sum / arr.length;
  return answer;
}
// other
function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}
