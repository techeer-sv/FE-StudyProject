const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let graph = input.map((v) => v.trim().split(" "));
let visited = Array.from({ length: n }, () => Array(m).fill(false));
let dx = [0, 0, -1, 1];
let dy = [-1, 1, 0, 0];
let cnt = 0;
let maximum = -1;

const bfs = (i, j) => {
  let result = [];
  result.push([i, j]);
  let max = 0;
  while (result.length !== 0) {
    let [x, y] = result.shift();
    max++;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }
      if (visited[nx][ny]) {
        continue;
      }
      if (graph[nx][ny] === "1") {
        result.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
  return max;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === "1" && !visited[i][j]) {
      visited[i][j] = true;
      let receive = bfs(i, j);
      cnt++;
      if (maximum < receive) maximum = receive;
    }
  }
}

console.log(cnt);
console.log(maximum === -1 ? 0 : maximum);
