function solution(s) {
    var eNum = ["zero", "one", "two", "three", "four","five", "six", "seven", "eight", "nine"];
    for(var i = 0; i < 10; i++){
        s = s.replace(eNum[i],i);
    }
    return parseInt(s);
}