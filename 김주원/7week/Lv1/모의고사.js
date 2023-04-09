// https://school.programmers.co.kr/learn/courses/30/lessons/42840

// 모의고사
// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
  var answer = [];
  let s1 = [1, 2, 3, 4, 5];
  let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let [score1, score2, score3] = [0, 0, 0];
  for (i in answers) {
    answers[i] == s1[i % 5] ? score1++ : null;
    answers[i] == s2[i % 8] ? score2++ : null;
    answers[i] == s3[i % 10] ? score3++ : null;
  }
  Math.max(score1, score2, score3) == score1 ? answer.push(1) : null;
  Math.max(score1, score2, score3) == score2 ? answer.push(2) : null;
  Math.max(score1, score2, score3) == score3 ? answer.push(3) : null;

  return answer;
}
