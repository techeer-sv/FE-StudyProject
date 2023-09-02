const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (
    input.length ===
    input[0]
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b, 0) +
      1
  ) {
    rl.close();
  }
});

rl.on("close", () => {
  const [n, k] = input[0].split(" ").map(Number);
  const ground = [];
  const bomb = [];
  for (let i = 1; i <= n; i++) {
    ground.push(input[i].split(" "));
  }
  // console.log(ground)
  for (let i = 1; i <= k; i++) {
    bomb.push(input[i + n].split(" ").map(Number));
  }

  // 중앙 상 하 좌 우
  let dy = [0, -1, 1, 0, 0];
  let dx = [0, 0, 0, -1, 1];
  let arr = Array(n)
    .fill(0)
    .map((e) => Array(n).fill(0));

  for (const [y, x] of bomb) {
    for (let i = 0; i < 5; i++) {
      const ny = y-1 + dy[i];
      const nx = x-1 + dx[i];

      if (ny < 0 || ny >= n || nx < 0 || nx >= n) {
        continue;
      }
      if (ground[ny][nx] === "0") {
        arr[ny][nx] += 1;
      } else if (ground[ny][nx] === "#") {
        continue;
      } else if (ground[ny][nx] === "@") {
        arr[ny][nx] += 2;
      }
    }
  }

  console.log(Math.max(...arr.flat()));
});
