function solution(my_string) {
  const mo = "aeiou";
  return my_string
    .split("")
    .filter((v) => !mo.includes(v))
    .join("");
}
