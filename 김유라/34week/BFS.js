const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(Number));

function bfs(x, y) {
  const queue = [[x, y]];
  const result = [];
  const visited = {};
  visited[[x, y]] = 1;
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let board = queue.shift();
      result.push(board);
      for (let j = 0; j < 4; j++) {
        let nx = board[0] + dx[j];
        let ny = board[1] + dy[j];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < M &&
          !visited[[nx, ny]] &&
          map[nx][ny] === 1
        ) {
          visited[[nx, ny]] = visited[board] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  return visited[[N - 1, M - 1]];
}

console.log(bfs(0, 0));
