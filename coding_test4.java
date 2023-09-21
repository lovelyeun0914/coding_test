import java.util.ArrayList;

public class coding_test4 {
    public int solution(int[][] board) {
//    public static void main(String[] args) {

//        int[][] board = {
//                {0, 0, 0, 0, 0},
//                {0, 0, 0, 0, 0},
//                {0, 0, 0, 0, 0},
//                {0, 0, 1, 1, 0},
//                {0, 0, 0, 0, 0}
//        };

        int answer = 0;
        ArrayList<int[]> arr = new ArrayList<>();
        for (var i = 0; i < board.length; i++){
            for (var j = 0; j < board[i].length; j++){
                if (board[i][j] == 1){
                    int[] nums = new int[2];
                    nums[0] = i;
                    nums[1] = j;

                    arr.add(nums);
                }
            }
        }

        for (int[] nums : arr) {
            int for_i = 0;

            for (var a = 0; a < 9; a++){
                int numbers = 0;
                if (a < 3){
                    numbers = nums[0] - 1;
                } else if (a<6) {
                    if (a==3) {
                        for_i = 0;
                    }
                    numbers = nums[0];
                }else{
                    if (a==6) {
                        for_i = 0;
                    }
                    numbers = nums[0] + 1;
                }

                try {
                    board[numbers][(nums[1]-1)+for_i] = 1;
                } catch (ArrayIndexOutOfBoundsException e) {
                    System.out.println("배열 내에 존재하지 않습니다.");
                }
                ++for_i;

            }
        }

        System.out.println(answer);
        for (int[] nums : board) {
            for (int num : nums) {
                if (num == 0){
                    answer++;
                }
            }
        }

//        System.out.println(answer);
        return answer;
    }

}