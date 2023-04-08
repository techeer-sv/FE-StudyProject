//다른사람 풀이 - repeat
function solution(my_string, n) {
    return my_string.split('').map(str => str.repeat(n)).join('');
}


//다른사람 풀이 - 같은건가...?
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}


//다른사람 풀이 - reduce 메서드
function solution(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}
