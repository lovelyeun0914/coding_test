var lines = [[0, 5], [3, 9], [1, 10]];
solution(lines)
function solution(lines) {

    const overlap_arr = [];
    const number_arr = [];
    lines.forEach(([start,end])=>{
        for(let i=start;i<end;i++){
            if (number_arr.includes(i) && !overlap_arr.includes(i) ){
                overlap_arr.push(i);
            }else{
                number_arr.push(i);
            }
        }
    });

    return overlap_arr.length;
}