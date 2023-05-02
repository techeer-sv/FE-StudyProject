// mine
function solution(n) {
  var answer = 0;
  var cnt = 0;
  for (let i =  4; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
          if (i % j === 0) cnt ++;
      }
      if (cnt >= 3) answer++;
      cnt = 0;
  }
  return answer;
}


// other, "_"는 인자를 받지 않겠다는 뜻 이다.
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((i) => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}