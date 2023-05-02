// function solution(a, b) {
//   var answer = "";
//   var arr = [a, b];
//   var sum = "";
//   var yap = "";
//   arr.sort((a, b) => b - a);

//   for (let i = arr[1]; i <= arr[0]; i++) {
//     answer = answer += i;
//   }

//   let num = answer
//     .toString()
//     .split("")
//     .map((n) => Number(n));
//   console.log(num);
//   for (let j = 0; j <= num.length - 1; j++) {
//     sum += num[j];
//   }
//   console.log(num);
//   console.log(sum);
//   // console.log(yap)
//   return sum;
// }

function solution(a, b) {
  let answer = 0;
  
  for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer = answer + i;
  }
  
  return answer;
}

function solution(a, b) {
  var answer = 0;
  if(a>=b){ // a가 b보다 클 경우(a, b가 같을 경우는 둘 중 아무 수나 리턴)
      for(let i=b; i<=a; i++){ // b에서 a까지 더하기
          answer = answer+=i;
      }
  }else if(a<b) { //b가 a보다 클 경우
      for(let i=a; a<=b; i++){ // a에서 b까지 더하기
          answer = answer+=i;
      }
  }
  return answer;
}