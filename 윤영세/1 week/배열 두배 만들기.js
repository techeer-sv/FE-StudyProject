// mine
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

// other impressive ans, use map matter
const solution = (numbers) => numbers.map((number) => number * 2);
