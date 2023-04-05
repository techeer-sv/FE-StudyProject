// mine
function solution(n) {
  var answer = 0;
  var bn = 1;
  var pizza = 6;

  while (true) {
    if (bn % n == 0 && bn % pizza == 0) {
      break;
    }
    bn++;
  }
  answer = bn / 6;
  return answer;
}

// other
const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};

function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}
