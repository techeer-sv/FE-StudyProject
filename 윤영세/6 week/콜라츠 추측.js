// mine
function solution(num) {
  let answer = 0;

  while (num != 1) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    answer += 1;
  }
  if (answer >= 500) {
    return -1;
  } else {
    return answer;
  }
}

function solution(num) {
  for (answer = 0; answer < 500; answer++) {
    if (num % 2 == 0) {
      num /= 2;
    } else if (num == 1) {
      return answer;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    }
  }
  return -1;
}

// other
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
