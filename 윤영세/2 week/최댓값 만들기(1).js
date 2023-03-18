function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

function solution() {
  var numbers = [4, 2, 5, 1, 3];
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(numbers);
}
solution();

// [1, 2, 3, 4, 5] 오름차순

function solution() {
  var numbers = [4, 2, 5, 1, 3];
  numbers.sort(function (a, b) {
    return b - a;
  });
  console.log(numbers);
}
solution();

// [5, 4, 3, 2, 1] 내림차순
