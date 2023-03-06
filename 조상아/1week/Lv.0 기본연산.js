//내 풀이 더하기,빼기
const solution = (num1, num2) => num1 + num2 //더하기
const solution = (num1, num2) => num1 - num2 //빼기


//다른사람 풀이(조건 넣은경우)
function solution(num1, num2) {    
    if(-50000<=num1 && num1<=50000){
        if(-50000<=num2 && num2<=50000){
            const answer = num1 + num2;

            return answer;
        }
    }
}



//내 풀이 곱하기

function solution(num1, num2) {
    var answer =  num1 * num2;
    return answer;
}


//다른사람 풀이1
const solution = (num1, num2) => num1 * num2