// mine
function solution(s1, s2) {
  var answer = 0;
  var array = [];
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (s1[i] == s2[j]) {
        array.push(j);
        answer = array.length - 1;
      }
    }
  }
  return answer;
}

// others similar one
function solution(s1, s2) {
  var answer = 0;
  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) answer++;
    }
  }
  return answer;
}

// impressive
function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
