// https://school.programmers.co.kr/learn/courses/30/lessons/12914

// 멀리 뛰기
// 문제 설명
// 효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는
// (1칸, 1칸, 1칸, 1칸)
// (1칸, 2칸, 1칸)
// (1칸, 1칸, 2칸)
// (2칸, 1칸, 1칸)
// (2칸, 2칸)
// 의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 알아내, 여기에 1234567를 나눈 나머지를 리턴하는 함수, solution을 완성하세요. 예를 들어 4가 입력된다면, 5를 return하면 됩니다.

function solution(n) {
  let answer;
  let t1 = 0;
  let t2 = 1;
  for (let i = 2; i <= n + 1; i++) {
    answer = t1 + (t2 % 1234567);
    t1 = t2;
    t2 = answer;
  }
  return answer % 1234567;
}

// function factorial(number) {
//   let num = 1;
//   for (let i = 1; i <= number; i++) {
//     num *= i;
//   }
//   return num;
// }

// function solution(n) {
//   //n이 4면 => 4개중에 0개, 3개중에 1개, 2개중에 2개의 위치 정하기-> 1+3+1=5
//   var total = 0;
//   let ans = n;
//   for (let i = 0; i <= parseInt(n / 2); i++) {
//     total += factorial(ans) / (factorial(ans - i) * factorial(i));
//     ans--;
//   }
//   return total;
// }
