// mine
function solution(my_string) {
  var answer = "";
  answer = my_string.replace(/['a','e','i','o','u']/g, "");
  return answer;
}

// other
function solution(my_string) {
  return my_string.replace(/['a','e','i','o','u']/g, "");
}

function solution(my_string) {
  const str = "aeiou";
  let newString = my_string
    .split("")
    .filter((el) => !str.includes(el))
    .join("");

  return newString;
}

// best thing i want
function solution(my_string) {
  let answer = "";
  let alpa = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < my_string.length; i++) {
    if (!alpa.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
}
//
function solution(my_string) {
  const str = "aeiou";

  let newString = my_string.split("");

  for (let i = 0; i < aeiou.length; i++) {
    for (let j = 0; j < my_string.length; j++) {
      if (newString.includes(aeiou[i])) {
        newString.splice(newString.indexOf(aeiou[i]), 1);
      }
    }
  }

  return newString.join("");
}
