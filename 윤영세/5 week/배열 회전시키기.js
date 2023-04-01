// mine
function solution(numbers, direction) {
  if (direction === "right") {
    let splicedArr = numbers.splice(0, numbers.length - 1);

    return [...numbers, ...splicedArr];
  }

  if (direction === "left") {
    let splicedArr = numbers.splice(1, numbers.length - 1);

    return [...splicedArr, ...numbers];
  }
}

// other
function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}
