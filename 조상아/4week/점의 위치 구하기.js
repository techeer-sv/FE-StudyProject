function solution(dot) {
    if(dot[0] > 0 && dot[1] > 0){
        return 1
    }else if(dot[0] < 0 && dot[1] > 0){
        return 2
    }else if(dot[0] < 0 && dot[1] < 0){
        return 3
    }else {
        return 4
    }
}


//다른사람 풀이 - 구조분해
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

//다른사람 풀이 
function solution(dot) {
    var answer = 0;
    // const x = dot[0]; 
    // const y = dot[1];  ...없어도 정상 작동

    if (x > 0 && y > 0) answer = 1
    if (x < 0 && y > 0) answer = 2
    if (x < 0 && y < 0) answer = 3
    if (x > 0 && y < 0) answer = 4

    return answer;
}