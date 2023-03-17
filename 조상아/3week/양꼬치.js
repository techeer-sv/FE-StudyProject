//내 풀이
function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
}

//다른사람 풀이 - 틸트문법
function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}