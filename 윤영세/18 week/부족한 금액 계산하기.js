function solution(arr){
  var answer = [];
  for (let i =0; i<= arr.length-1; i++){
      answer = arr.map((n) => (n == arr[i]))    
  }
  
  return answer;
}

function solution(arr){
  var answer = [];
  for(var i =0; i< arr.length; i++){
      if(arr[i] !== arr[i+1]){
          answer.push(arr[i])
      }
  }
  return answer;
}