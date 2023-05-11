function solution(progresses, speeds) {
  var answer = [];
  let days = 0;
  for (let i = 0; i < progresses.length; i++) {
    const needDays = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (needDays > days) {
      days = needDays;
      answer.push(1);
    } else {
      answer[answer.length - 1]++;
    }
  }
  return answer;
}
