function solution(cipher, code) {
  return [...cipher].filter((c, i) => (i + 1) % code === 0).join("");
}
