// https://school.programmers.co.kr/learn/courses/30/lessons/42839

// 소수 찾기
// 문제 설명
// 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

// 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  const numArr = numbers.split("");
  const permutationSet = new Set();
  const generatePermutation = (arr, visited, str) => {
    if (str.length > 0) {
      permutationSet.add(Number(str));
    }

    if (arr.length === str.length) {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        generatePermutation(arr, visited, str + arr[i]);
        visited[i] = false;
      }
    }
  };

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  generatePermutation(numArr, Array(numArr.length).fill(false), "");

  let count = 0;
  for (const num of permutationSet) {
    if (isPrime(num)) {
      count++;
    }
  }

  return count;
}
