// mine
function solution(age) {
  var answer = [];
  var abc = "abcdefghij";
  var num = age.toString().split("").map((n) => Number(n))
  var eng = abc.split("");
  
  console.log(age);
  console.log(eng);
  console.log(num);
  
  for(let i = 0; i<= num.length-1; i++){
      var order = num[i];
      
      answer += eng[order];
  }
  return answer;
}


// other
function solution(age) {
    
  let alpha = {
      0 : "a",
      1 : "b",
      2 : "c",
      3 : "d",
      4 : "e",
      5 : "f",
      6 : "g",
      7 : "h",
      8 : "i",
      9 : "j"
  }
  
  let newAge = age + "";
  
  return newAge.split("").map((el) => alpha[el]).join("");
}