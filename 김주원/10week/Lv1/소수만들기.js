// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// 소수 만들기
// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

//소수판별함수
function isPrime(sum) {
  for (let i = 2; i < sum; i++) if (sum % i === 0) return false;
  return true;
}

function solution(nums) {
  let answer = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }
  return answer;
}
