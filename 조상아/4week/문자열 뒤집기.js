//다른사람 풀이 - split 메서드
const solution = (my_string) => my_string.split("").reverse().join("")

//위와 동일
function solution(my_string) {
    return my_string.split('').reverse().join('');
}

//다른사람 풀이 - 스프레드 문법
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}

