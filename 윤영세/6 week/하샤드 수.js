// mine
function solution(x) {
  var answer = true;
  var num = x.toString().split("").map((n) => Number(n))
  var sum = 0;
  for(let i = 0; i<=num.length-1; i++){
      sum += num[i];
  }
  if(x%sum ==0){
      answer = true;
  }else{
      answer = false;
  }
  return answer;
}

// other
function solution(x) {
  let num = x;
  let sum = 0;
  do {
      sum += x%10;
      x = Math.floor(x/10);
  } while (x>0);

  return !(num%sum);
}

function Harshad(n){
  var result ;
  var sum = 0;
  var arr = String(n).split('');
  for(var i=0; i<arr.length; i++) {
    sum += Number(arr[i]);
  }
  return n % sum == 0 ? true : false;
}