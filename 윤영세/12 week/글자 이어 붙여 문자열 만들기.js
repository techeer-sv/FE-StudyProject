//mine
function solution(my_string, index_list) {
  var answer = [];
  for (var i = 0; i <= index_list.length - 1; i++) {
    answer.push(my_string[index_list[i]]);
  }
  var num = answer.join("");
  return num;
}
//other
function solution(my_string, index_list) {
  return index_list.reduce((acc, cur) => acc + my_string[cur], "");
}

function solution(my_string, index_list) {
  return index_list.reduce((acc, cur) => {
    return acc + my_string[cur];
  }, "");
}

function solution(my_string, index_list) {
  let result = "";

  for (let i = 0; i < index_list.length; i++) {
    result += my_string.charAt(index_list[i]);
  }

  return result;
}
