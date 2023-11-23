const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const [x, y] = input
  .shift()
  .split(" ")
  .map((v) => +v);
const m = Number(input.shift());
const family = input.map((item) => item.split(" ").map((v) => +v));
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }).map(() => false);

for (let i = 0; i < family.length; i++) {
  const [x, y] = family[i];
  graph[x].push(y);
  graph[y].push(x);
}

if (n === 1) return -1;

const BFS = (start) => {
  const queue = [[start, 0]];
  while (queue.length) {
    let [qx, cnt] = queue.shift();
    let nearQx = graph[qx];
    if (visited[qx]) continue;
    if (qx === y) return cnt;
    visited[qx] = true;

    for (let i = 0; i < nearQx.length; i++) {
      let value = nearQx[i];
      if (visited[value]) continue;
      if (value === y) return cnt + 1;
      queue.push([value, cnt + 1]);
    }
  }
  return -1;
};
console.log(BFS(x));
