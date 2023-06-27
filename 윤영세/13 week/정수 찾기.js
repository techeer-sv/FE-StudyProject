//mine
function solution(num_list, n) {
  var answer = 0;
  var num = 0
  num = num_list.indexOf(n)
  return answer = num > 1 ? 1 : 0
  console.log(num_list)
  console.log(answer)
  return answer;
}

// other
const solution = (num_list, n) => num_list.includes(n) ? 1 : 0