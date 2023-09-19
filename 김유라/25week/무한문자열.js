const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const s = input[0].trim();
const t = input[1].trim();

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function solution(s, t) {
  const lcm = (s.length * t.length) / gcd(s.length, t.length);
  const S = s.repeat(lcm / s.length);
  const T = t.repeat(lcm / t.length);
  return S === T ? 1 : 0;
}
console.log(solution(s, t));
