//다른사람 풀이 isNaN()메서드
function solution(my_string) {
    let answer = 0;
    my_string.split("").map(e => !isNaN(e)? answer += Number(e) : 0)
    return answer;
}


// my_string.split("").map(e => !isNaN(e)? answer += Number(e) : 0)의 의미?



//다른사람 풀이 - 정규표현식 ^ 사용
function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
                            .split('')
                            .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}

//다른사람 풀이 - 정규표현식???
function solution(my_string) {
    return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b));
}