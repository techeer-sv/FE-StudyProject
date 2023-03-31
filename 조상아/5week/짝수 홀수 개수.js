//다른사람 풀이 - 배열 인덱스
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}

//다른사람 풀이 - for...of 메서드
function solution(num_list) {
    var answer = [0, 0];

    for (let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            answer[0]++;
        } else {
            answer[1]++;
        }
    }

    return answer;
}

//다른사람 풀이 - 필터 메서드
function solution(num_list) {
    const even = num_list.filter(n => n%2 === 0).length
    return [even, num_list.length - even];
}