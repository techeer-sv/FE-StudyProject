//내 풀이
function solution(angle) {
    if(0 < angle && angle < 90) {
        return 1
    } else if(angle === 90) {
        return 2
    } else if(90 < angle && angle < 180) {
        return 3
    } else {
        return 4
    }
}

//다른사람 풀이 - filter
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}

//다른사람 풀이 - 삼항연산자
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}