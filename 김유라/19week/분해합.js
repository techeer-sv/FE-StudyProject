let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");
const N = Number(input);
let M = 0;
let start = N - String(N).length * 9;
for (let i = start; i < N; i++) {
  //189 ~ 256
  let sum = 0; //분해합 초기화
  value = i;
  const string = value.toString(); //"189"
  for (let j = 0; j < string.length; j++) {
    //0부터 3까지
    sum += Number(string[j]); //sum=1 + 8 + 9
  }
  sum += value; //189=1+8+9
  if (sum == N) {
    //분해합(256)
    M = value; //생성자 (245)
    break;
  }
}
console.log(M);
