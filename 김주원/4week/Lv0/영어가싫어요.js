// 영어가 싫어요
// 문제 설명
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
  var answer = 0;
  return parseInt(
    numbers
      .replace(/zero/g, 0)
      .replace(/one/g, 1)
      .replace(/two/g, 2)
      .replace(/three/g, 3)
      .replace(/four/g, 4)
      .replace(/five/g, 5)
      .replace(/six/g, 6)
      .replace(/seven/g, 7)
      .replace(/eight/g, 8)
      .replace(/nine/g, 9)
  );
}
