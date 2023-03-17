//내 풀이
function solution(age) {
    var answer = 2022 - age + 1;
    return answer;
}

//다른사람 풀이
function solution(age) {
    return new Date().getFullYear() - age + 1;
}