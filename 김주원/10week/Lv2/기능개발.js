// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

// 기능개발
// 문제 설명
// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

function solution(progresses, speeds) {
  // 작업이 100이 되는데까지 걸리는 시간
  let day = [];
  // 작업이 완료됐는지 비교값
  let finish = Math.ceil((100 - progresses[0]) / speeds[0]);
  // 같은날 끝나는 작업의 수 카운트
  let count = 0;
  // 정답
  let answer = [];
  for (let i = 0; i < progresses.length; i++) {
    // day의 값 설정
    day.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    // i번째 인덱스의 작업이 아직 끝나지 않았으므로 이전까지의 카운트를 push
    if (day[i] > finish) {
      answer.push(count);
      count = 1;
      finish = day[i];
    }
    // i번째 작업이 끝났으므로 카운트수 늘리기
    else {
      count += 1;
    }
    // 마지막번째 인덱스가 push되지 않으므로 마지막 인덱스만 한 번더 처리
    if (i == progresses.length - 1) {
      answer.push(count);
    }
  }
  return answer;
}
