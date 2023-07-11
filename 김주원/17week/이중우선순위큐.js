// https://school.programmers.co.kr/learn/courses/30/lessons/42628

// 이중우선순위큐
// 문제 설명
// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

// 명령어	수신 탑(높이)
// I 숫자	큐에 주어진 숫자를 삽입합니다.
// D 1	큐에서 최댓값을 삭제합니다.
// D -1	큐에서 최솟값을 삭제합니다.
// 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

function solution(operations) {
  let queue = [];

  for (let i = 0; i < operations.length; i++) {
    const [command, value] = operations[i].split(" ");

    if (command === "I") {
      queue.push(Number(value));
    } else if (command === "D" && queue.length > 0) {
      if (value === "1") {
        const max = Math.max(...queue);
        queue.splice(queue.indexOf(max), 1);
      } else if (value === "-1") {
        const min = Math.min(...queue);
        queue.splice(queue.indexOf(min), 1);
      }
    }
  }

  if (queue.length === 0) {
    return [0, 0];
  } else {
    return [Math.max(...queue), Math.min(...queue)];
  }
}
