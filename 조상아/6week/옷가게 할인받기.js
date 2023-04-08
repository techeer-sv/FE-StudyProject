function solution(price) {
    if(price >= 500000){
        return Math.floor(price * 0.8)
    }else if(price >= 300000){
        return Math.floor(price * 0.9)
    }else if(price >= 100000){
        return Math.floor(price * 0.95)
    }else{
        return price
    }
}


//다른사람 풀이 - 반복문 이용
const discounts = [
    [500000, 20],
    [300000, 10],
    [100000,  5],
]

const solution = (price) => {
    for (const discount of discounts)
        if (price >= discount[0])
            return Math.floor(price - price * discount[1] / 100)
    return price
}