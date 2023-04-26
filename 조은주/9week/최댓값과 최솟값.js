function solution(s) {
    s = s.split(" ");
    return Math.min(...s) + " " + Math.max(...s);
}

function solution(s) {
    s = s.split(" ").sort((a,b)=>(a-b));
    return s[0] + " " + s[s.length-1];
}