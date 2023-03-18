const solution = (cipher, code) =>
  [...cipher].filter((a, i) => (i + 1) % code === 0).join("");

function solution(cipher, code) {
  return cipher
    .split("")
    .filter((_, index) => (index + 1) % code === 0)
    .join("");
}
