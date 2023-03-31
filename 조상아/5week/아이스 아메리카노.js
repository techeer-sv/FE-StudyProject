function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}

//다른사람 풀이 - ~~는 뭐지?
function solution(money) {
    return [~~(money/5500),money%5500];
}