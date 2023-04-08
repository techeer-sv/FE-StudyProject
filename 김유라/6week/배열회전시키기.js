function solution(numbers, direction) {
  "right" == direction
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}
