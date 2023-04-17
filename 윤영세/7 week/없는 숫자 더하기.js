// mine
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

//other
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
