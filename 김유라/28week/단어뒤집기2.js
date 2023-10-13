const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const tag = input.match(/<[a-z ]+>/g) ?? [];
const words = input.split(/<[a-z ]+>/);
const reverse = words.map((v) =>
  v
    .split(" ")
    .map((i) => [...i].reverse().join(""))
    .join(" ")
);
const answer =
  tag.map((tags, i) => reverse[i] + tags).join("") +
  reverse[reverse.length - 1];
console.log(answer);
