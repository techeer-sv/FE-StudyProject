function cntOne(num) {
  let cnt = 0,
    two = num.toString(2).split("");
  for (let i = 0; i <= two.length; i++) {
    if (two[i] == 1) {
      cnt++;
    }
  }
  return cnt;
}

function solution(n) {
  let NumTest = n;
  while (true) {
    NumTest++;
    if (cntOne(NumTest) == cntOne(n)) return NumTest;
  }
}
