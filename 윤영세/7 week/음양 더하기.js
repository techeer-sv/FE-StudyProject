// mine
function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i <= absolutes.length - 1; i++) {
    if (signs[i] == true) {
      answer += absolutes[i];
    } else {
      answer += absolutes[i] * -1;
    }
  }
  return answer;
}

// other
function solution(absolutes, signs) {

  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

// 문제이해 잘함
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
      signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
  }
  return answer;
}