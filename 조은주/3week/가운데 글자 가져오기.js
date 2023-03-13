function solution(s) {
    var a = parseInt(s.length / 2);
    return s.length % 2? s[a] : s.slice(a-1, a+1);
}