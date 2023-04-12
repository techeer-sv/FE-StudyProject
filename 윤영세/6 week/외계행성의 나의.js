function solution(age) {
  var answer = [];
  var abc = "abcdefghij";
  var num = age
    .toString()
    .split("")
    .map((n) => Number(n));
  var eng = abc.split("");

  console.log(age);
  console.log(eng);
  console.log(num);

  for (let i = 0; i <= num.length - 1; i++) {
    var order = num[i];

    answer += eng[order];
  }
  return answer;
}
