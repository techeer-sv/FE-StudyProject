//mine
function solution(arr) {
  var answer = [];
  var atob = arr.sort((a,b) => b-a)
  for(let i=0; i<=atob.length-2; i++){
      answer.push(arr[i]);
  }
  if(arr == 10){
      answer = [-1]
  }
  return answer;
}

function solution(arr) {
  var answer = [];
  arr.sort((a,b) => b-a)
  console.log(arr)
  arr.splice(-1,1)
  console.log(arr)
  arr.length <= 1 ? answer = [-1] : answer = arr;
  
  return answer;
}

function solution(arr) {
  var answer = [];
  arr.splice(arr.indexOf(Math.min(...arr)),1)
  arr.length <= 1 ? answer = [-1] : answer = arr;
  
  return answer;
}

//other
function solution(arr) {
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
}