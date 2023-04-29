// mine
function solution(numbers) {
  var answer = 0;
  var a = numbers;
  var b = numbers;
  
  var fs = a.sort((a,b) => b-a)
  var s = fs[0] * fs[1];
  
  var fb = b.sort((a,b) => a-b) 
  var h = fb[0] * fb[1];

  return answer;
}

// other
