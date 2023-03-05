// my own
function solution(money) {
  var answer = [];
  answer[0] = Math.floor(money / 5500);
  answer[1] = money % 5500;
  return answer;
}

// mine
function solution(money) {
  var answer = [];
  var first = Math.floor(money / 5500);
  var second = money % 5500;
  var answer = [first, second];

  return answer;
}

// other impressive answer
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

// wrong answers
function solution(money) {
  var answer = [];
  answer[0] = answer.push(Math.floor(money / 5500));
  answer[1] = answer.push(money % 5500);

  return answer;
}

function solution(money) {
  var answer = [];
  answer[0] = money / 5500;
  answer[1] = money % 5500;
  return answer;
}

function solution(money) {
  var answer = [];
  answer[0] = Math.floor(money / 5500);
  answer[1] = money % 5500;
  return answer;
}

function solution(money) {
  var answer = [];
  if (money % 5500 == 0) {
    answer[0] = answer.push(Math.floor(money / 5500));
    answer[1] = answer.push(money % 5500);
  }
  return answer;
}

console.log(solution(6000));
