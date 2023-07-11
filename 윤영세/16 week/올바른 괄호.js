function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}

function solution(s){
  if(s[0] === ")") return false;
  let number = 0;
  for(let i = 0; i <= s.length - 1; i++){
      (s[i] === "(") ? number+=1 : number-=1;
      if(number < 0) return false;
  }
  return (number === 0) ? true : false;
}