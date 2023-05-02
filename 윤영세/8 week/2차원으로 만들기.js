//mine
function solution(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length / n; i++) {
    answer.push(num_list.slice(i * n, i * n + n));
  }
  return answer;
}

//other
function solution(num_list, n) {
  const answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}


function solution(num_list, n) {
  // 정답배열 생성
  const result = []
  // 전 범위 순환
  for(let i = 0 ; i < num_list.length; ) {
      const sliceN = []
      // n만큼 배열 생성
      for(let j = 0 ; j < n ; j++) {
          sliceN.push(num_list[i])
          i++
      }
      result.push(sliceN)
  }
  return result
}
