//내 풀이
function solution(message) {
    return message.length*2;
}

//다른사람 풀이 - 굳이 split 메서드가 필요한가...?
function solution(message) {
    return message.split('').length * 2;
}