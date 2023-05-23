function solution(priorities, location) {
  var answer = 0;
  const arr = priorities.map((process, index) => {
    return [process, index];
  });
  while (priorities.length) {
    const queue = arr.shift();
    if (arr.some((el) => el.process > queue.process)) {
      arr.push(queue);
    } else {
      answer++;
      if (queue.index === location) break;
    }
  }
  return answer;
}
