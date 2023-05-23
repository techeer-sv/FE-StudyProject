// https://school.programmers.co.kr/learn/courses/30/lessons/12949

// 행렬의 곱셈
// 문제 설명
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let el = 0;
      for (let k = 0; k < arr2.length; k++) {
        el += arr1[i][k] * arr2[k][j];
      }
      result.push(el);
    }
    answer.push(result);
  }
  return answer;
}
