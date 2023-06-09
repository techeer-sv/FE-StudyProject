function solution(sizes) {
  let maxWidth = 0,
    maxHeight = 0;

  sizes.forEach((size) => {
    size.sort((a, b) => a - b);
    const [width, height] = size;
    if (maxWidth < width) maxWidth = width;
    if (maxHeight < height) maxHeight = height;
  });

  return maxWidth * maxHeight;
}
