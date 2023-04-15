//내 풀이 - indexOf() + 삼항연산자
function solution(str1, str2) {
    var answer = str1.indexOf(str2) !== -1?1:2;
    return answer;
}

//다른사람 풀이 
// includes 함수를 사용하여 포함 여부를 확인하고 삼항 연산자로 값을 반환함
const solution = (str1, str2) => str1.includes(str2) ? 1 : 2


//다른사람 풀이 - split, length 
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}