
function solution(babbling) {
    var answer = 0;
    var mussc_arr = [ "aya", "ye", "woo", "ma"];

    // babbling.replaceAll("aya","");
    // console.log(babbling);
    for(var i = 0; i < babbling.length; i++ ){
        var str = babbling[i]
        for(var j = 0; j < mussc_arr.length; j++ ){
            str = str.replace(mussc_arr[j], " ");
        }
        if(str.trim()==""){
            answer++
        }
    }

    return answer;

}