//mine
function solution(s) {
  var answer = [];
  var n = s.split(" ");
  let max = Math.max(...n);
  let min = Math.min(...n);
  answer = min + " " + max;
  // answer.push(min)
  // answer.push(max)
  // var snu = answer.split(" ")
  // answer.split(" ")
  return answer;
  // return snu;
}

//other
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
