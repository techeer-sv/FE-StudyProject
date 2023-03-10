//다른사람 풀이
function solution(array) {
    // array의 최댓값만큼의 길이를 가진 새로운 배열 생성
    let newArray = new Array(Math.max(...array)+1).fill(0);
    // array 반복문을 통해, 해당 값에 해당하는 index의 값 += 1
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]] += 1
    }
    // newArray의 최댓값에 해당 하는 index 출력
    // 만약 indexOf와 lastIndexOf가 지칭하는 값이 같으면, -1 출력 (중복인 경우 확인)
    if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
        return -1
    } else {
        return newArray.indexOf(Math.max(...newArray));
    };
}



//다른사람 풀이
function solution(array) {
    // array의 길이가 1일 경우 갯수가 하나이기에
    // 그 값을 반환해준다.
    if (array.length === 1) return array[0];
  
    const obj = {};
    const answer = [];
  
    // array를 forEach() 반복문을 돌려
    // obj에 값이 없으면 값을 만들고 1을 넣어주고
    // obj에 값이 있으면 기존 값 +1을 해준다.
    array.forEach((n) => {
      obj[n] = ++obj[n] || 1;
    });
  
    // 값과 그 값의 갯수를 정의해 둔 obj를 array에 넣어준다.
    // ex) [[1, 1], [2, 1], [3, 3], [4, 1]]
    for (let key in obj) {
      answer.push([key, obj[key]]);
    }
  
    // answer 배열을 갯수 기준으로 내림차순 정렬을 해준다.
    // ex) [[3, 3], [4, 1], [2, 1], [1, 1]]
    answer.sort((a, b) => b[1] - a[1]);
  
    // 최빈값이 여러 개면 -1을 반환해야 하기 때문에 확인한다.
    if (answer[0][1] === answer[1][1]) return -1;
  
    // 여러개가 아니라면 정렬한 처음 값을 반환한다.
    return Number(answer[0][0]);
  }
  
  console.log(solution([1, 2, 3, 3, 3, 4])); // 3
  console.log(solution([1, 1, 2, 2])); // -1
  console.log(solution([1])); // 1

  

  //다른사람 풀이
  function solution(array) {
    let map = new Map();
    
    // Map 객체 초기화
    for(let i = 0; i <= Math.max(...array); i++){
        map.set(i, 0);    
    }
    
    // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시킨다
    for(let i = 0; i < array.length; i++){
        map.set(array[i], map.get(array[i]) + 1);
    }
    
    // Map 객체의 value만 모아서 배열로 만든다
    let arr = Array.from(map.values());
    
    // 최대값 산출
    let max = Math.max(...arr);
    
    // 최대값이 하나만 있다면 max, 여러 개 중복된다면 -1 출력
    if(arr.indexOf(max) !== arr.lastIndexOf(max)){
        return -1;
    } else {
        return arr.indexOf(max);
    }
}