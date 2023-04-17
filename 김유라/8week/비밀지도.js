function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let result = "";
    let temp1 =
      "0".repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
    let temp2 =
      "0".repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);
    for (let j = 0; j < temp1.length; j++) {
      temp1[j] == 1 || temp2[j] == 1 ? (result += "#") : (result += " ");
    }
    answer.push(result);
  }
  return answer;
}
// console.log(temp1)
