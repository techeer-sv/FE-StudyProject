function solution(start, end) {
  var answer = [];
  for(let i = end; i<=start; i++){
      answer.push(i)
  }
  answer.reverse()
  console.log(answer)
  
  return answer;
}

//other
function solution(start, end) {
  var answer = [];

  for(let i = start; i>=end; i--){
      answer.push(i)
  }

  return answer;
}