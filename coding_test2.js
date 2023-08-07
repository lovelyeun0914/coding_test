var n = 5;
solution(n);
function solution(n) {
    // var answer = [];
    var answer =  Array.from(Array(n), () => Array(n).fill(0))


    var col = 0,
        row = -1,
        i = 1;


    while (i <= n*n){
        while(answer[col][row+1] == 0 && row< n){
            row++;
            answer[col][row] = i ;
            i++;
        }
        while(answer[col+1] !== undefined && answer[col+1][row] == 0 && col < n) {
            col++;
            answer[col][row] = i;
            i++;

        }
        while(answer[col][row-1] == 0 && row > 0){
            row--;
            answer[col][row] = i ;
            i++;
        }
        while(answer[col-1] !== undefined && answer[col-1][row] == 0 && col > 0){
            col--;
            answer[col][row] = i;
            i++;
        }

    }
    console.log(answer)
    return answer;

}