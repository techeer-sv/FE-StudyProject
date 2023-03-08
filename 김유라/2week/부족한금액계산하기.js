function solution(price, money, count) {
    let need=0;
    for (let i=0; i<=count; i++){
        need+=price*i;
    }
    return need > money ? need-money : 0;
}