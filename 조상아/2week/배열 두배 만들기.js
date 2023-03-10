//내 풀이  
function solution(numbers) {
    return numbers.map((v) => v*2)
}


//다른사람 풀이 - reduce 사용법
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

//다른사람 풀이 - map 사용법
const solution = (numbers) => numbers.map((number) => number * 2)

//다른사람 풀이
function solution(numbers) {
    return numbers.map(i=>i*2);
}