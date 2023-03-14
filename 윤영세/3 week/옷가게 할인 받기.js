// function solution(price) {
//   var answer = 0;
//   if(price < 100,000){
//       answer = price;
//   }else if(price >= 100,000 && price < 300,000){
//       answer = price - (price * 0.05);
//   }else if(price >= 300,000 && price < 500,000){
//       answer = price - (price * 0.1);
//   }else if(price >= 500,000){
//       answer = price - (price * 0.2);
//   }
//   return Math.floor(answer);
// }

// function solution(price) {
//   var answer = 0;
//   if ((price < 100, 000)) {
//     answer = price;
//   } else if ((price >= 100, 000)) {
//     answer = price * 0.95;
//   } else if ((price >= 300, 000)) {
//     answer = price * 0.9;
//   } else if ((price >= 500, 000)) {
//     answer = price * 0.8;
//   }
//   return answer;
// }

function solution(price) {
  var answer = 0;
  if ((price >= 500, 000)) {
    answer = price * 0.8;
  } else if ((price >= 300, 000)) {
    answer = price * 0.9;
  } else if ((price >= 100, 000)) {
    answer = price * 0.95;
  } else if ((price < 100, 000)) {
    answer = price;
  }
  return answer;
}

console.log(solution(150, 000));
