function solution(n, m) {
  var answer = [];
  var great = 1;
  var small = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      small = i;
    }
  }
  while (true) {
    if (great % n == 0 && great % m == 0) {
      break;
    }
    great++;
  }
  answer.push(small);
  answer.push(great);

  console.log(small);
  console.log(great);

  return answer;
}
