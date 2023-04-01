const solution = (array, n) => array.reduce((a,b) => n === b ? a+1 : a,0)

//다른사람 풀이 - 필터
function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}

//다른사람 풀이 - 필터 및 ?
function solution(array, n) {
    return array.filter(v=>v===n).length;
}

