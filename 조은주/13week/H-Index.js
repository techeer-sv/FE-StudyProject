function solution(citations) {
    var answer = 0;
    while(answer++ <= citations.length){
        var num = 0;
        for(var i = 0; i < citations.length; i++){
            if(citations[i] >= answer) num++;
        }
        if(num == answer) return answer;
    }
    return 0;
}