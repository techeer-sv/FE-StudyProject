// mine
function solution(s) {
  let change = s.toLowerCase();

  let check_p = change.split("p").length;
  let check_y = change.split("y").length;

  return check_p == check_y ? true : false;
}

function solution(s) {
  var answer = true;
  s.toLowerCase().split("");
  var p = "";
  var y = "";
  for (let i = 0; i <= s.length; i++) {
    if (s[i] == "p") {
      p++;
    } else if (s[i] == "y") {
      y++;
    }
  }
  if (p.length == y.length || p.length + y.length <= 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}


// other
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}