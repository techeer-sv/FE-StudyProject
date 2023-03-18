function solution(seoul) {
    return '김서방은 ' + seoul.indexOf("Kim") + '에 있다';
}

// ``(백틱)안 문자열을 작성 → ${}의 {}안에  변수이름 넣어주면 값이 나옴
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}