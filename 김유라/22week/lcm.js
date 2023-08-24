const [n, ...arr] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  let a = arr[i][0];
  let b = arr[i][1];
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  console.log(lcm(a, b));
}
