function solution(strlist) {
    var answer = [];
    for (let i = 0; i < strlist.length; i++) {
      answer.push(strlist[i].length);
    }
    return answer;
  }
  
  //다른사람 풀이 - map 메서드
  const solution = strlist => strlist.map(a => a.length)
  
  //map
  function solution(strlist) {
      return strlist.map((el) => el.length)
  }