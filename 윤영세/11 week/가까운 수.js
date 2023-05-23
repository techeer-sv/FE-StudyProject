function solution(array, n) {
  var answer = 0;
  var first = [];
  var last = [];
  array.forEach((arr) => {
    first.push(arr - n);
  });
  first.sort((a, b) => a - b);

  first.forEach((v) => {
    last.push(Math.abs(v));
  });

  last.sort((a, b) => a - b);

  answer = last[0] + n;
  return answer;
}

//other
function solution(array, n) {
  array.sort((a, b) => a - b);
  let a = 0;
  let b = 0;
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    answer.push(Math.abs(n - array[i]));
    a = Math.min(...answer);
    b = answer.indexOf(a);
  }
  return array[b];
}
