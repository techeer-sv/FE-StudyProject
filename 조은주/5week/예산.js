function solution(d, budget) {
    var answer = 0, sum = 0;
    d.sort((a,b) => a - b);
    for(var i = 0; i < d.length; i++){
        answer++;
        sum += d[i];
        
        sum > budget ? answer-- : 0;
    }
    return answer;
}

// 다른 사람의 풀이
function solution(d, budget) {
    d.sort((a, b) => a - b);
    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();
    return d.length;
}