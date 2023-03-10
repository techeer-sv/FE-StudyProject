//다른사람 풀이
const solution = array => array.sort((a,b) => a-b)[array.length/2 <<0]

//다른사람 풀이
function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
  }

//다른사람 풀이
function solution(array) {
    array.sort((a, b) => a - b);
    return array[Math.floor(array.length/2)];
}