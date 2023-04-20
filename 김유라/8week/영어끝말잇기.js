function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (words[i - 1].substr(-1) !== words[i][0]) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    } else {
      for (let j = 0; j < i; j++) {
        if (words[j] == words[i]) {
          return [(i % n) + 1, Math.ceil((i + 1) / n)];
        }
      }
    }
  }
  return [0, 0];
}
