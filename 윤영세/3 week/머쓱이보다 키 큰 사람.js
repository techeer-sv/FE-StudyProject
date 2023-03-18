// mine
function solution(array, height) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

// other
function solution(array, height) {
  return array.filter((a) => a > height).length;
}

// 머쓱이가 반에서 몇번째로 큰지 구하는 식
function solution(array, height) {
  var answer = 0;
  array.sort((a, b) => b - a);
  for (let i = 0; i < array.length; i++) {
    if (height > array[i]) {
      answer = i;
    } else if (height < array[i]) {
      answer = i - 1;
    }
  }
  return answer;
}
