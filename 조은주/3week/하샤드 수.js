function solution(x) {
    return !(x % String(x).split("").reduce((a,b) => (a + parseInt(b)), 0));
}