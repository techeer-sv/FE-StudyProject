const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, "a").length);
