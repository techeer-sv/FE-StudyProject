// mine
function solution(num_list) {
  var answer = [];
  var second = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      second.push(i);
    }
  }
  answer = [second.length, num_list.length - second.length];
  return answer;
}
// other, for(let a of ) 형태
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}
