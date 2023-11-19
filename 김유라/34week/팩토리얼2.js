const input = Number(require("fs").readFileSync("/dev/stdin").toString());

const DFS = (num) => {
  if (num < 1) {
    return 1;
  } else {
    return num * DFS(num - 1);
  }
};
console.log(DFS(input));
