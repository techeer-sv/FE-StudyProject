function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
      answer.sort((a, b) => a - b);
    } else if (answer.length === 0) {
      answer.push(-1);
    }
  }
  return answer;
}

function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % divisor == 0) {
      answer.push(arr[i]);
      answer.sort((a, b) => a - b);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer;
}
