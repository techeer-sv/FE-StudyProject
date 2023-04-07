// mine
function solution(phone_number) {
  var answer = "";
  for (let i = 0; i <= phone_number.length - 5; i++) {
    answer += phone_number[i].replace(phone_number[i], "*");
  }
  return answer + phone_number.slice(-4);
}

// other
function solution(phone_number) {
  var answer = "";
  var num = phone_number
    .toString()
    .split("")
    .map((n) => Number(n));
  var strNum = phone_number.toString();

  for (let i = 0; i <= num.length - 5; i++) {
    if (num[i].length == i) {
      answer = strNum.replaceAll(`"${num[i]}"`, "*");
    }
  }
  return answer;
}

function solution(phone_number) {
  var answer = "";
  var num = phone_number
    .toString()
    .split("")
    .map((n) => Number(n));
  var strNum = phone_number.toString();
  for (let i = 0; i <= num.length - 5; i++) {
    strNum.replaceAll(`"${num[i]}"`, "*");
    // strNum.replace(/num[i]/gi, "*");
  }
  return (answer = phone_number);
}
