// mine
function solution(my_string, n) {
  var answer = "";
  answer = my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");

  return answer;
}

//other
const solution = (my_string, n) => {
  return [...my_string].map((a) => a.repeat(n)).join("");
};

function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}
// 두 코드의 차이점은 map메서드를 사용했는 가와 reduce를 사용했는가의 차이점인데, reduce는 initialvalue를 줘야 하는 차이가 있다.
// 이때 initialvalue는 arr.reduce(callback[, initialValue])
