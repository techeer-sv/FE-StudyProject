//mine
function solution(before, after) {
  var answer = 0;
  var beSort = [...before].sort().join("");
  var afSort = [...after].sort().join("");

  if (beSort == afSort) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}

//other
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}


const title = document.querySelector("#title");

title.onclick = () => {
  title.classList.toggle("clicked")
}