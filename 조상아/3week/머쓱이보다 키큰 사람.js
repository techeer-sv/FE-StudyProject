function solution(array, height) {
    return array.filter(a => a > height).length;
}

//다른사람 풀이
function solution(array,height) {
    let answer=[];  //반환해야할 값(머쓱이보다 키 큰 배열 요소들)을 담은 빈 배열을 만들어준다.
    for (let i=0; i<array.length; i++) {  //반복문을 통해서 매개변수 array의 배열 요소들을 탐색한다.
        if (array[i]>height) {  //조건문을 이용하여 머쓱이 키보다 큰 배열 요소를 골라낸다.
            answer.push(i);  //이전에 만들어 두었던 빈 배열에 머쓱이보다 큰 배열 요소들을 추가하여 담는다.
        }
    }
    return answer.length;  //머쓱이보다 큰 배열 요소들을 담은 앤서 배열의 길이를 반환한다.
}