//다른사람 풀이 - split 분리 -> 배열로 반환
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}


//다른사람 풀이 - replaceAll 메서드
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}


//다른사람 풀이 - 정규식 풀이????
function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
}