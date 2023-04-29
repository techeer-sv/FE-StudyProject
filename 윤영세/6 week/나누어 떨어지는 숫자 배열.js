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

// other
function solution(arr, divisor) {
  var answer = [];

  for(var i = 0; i < arr.length; ++i) {
      if(arr[i] % divisor == 0) answer.push(arr[i]);
  }

  return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}

// filter
function solution(arr, divisor) {
  var answer = arr.filter(v => v%divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}