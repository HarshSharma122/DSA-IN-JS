var searchMatrix = function (matrix, target) {

    let rowLength = matrix.length - 1;
    let colLength = matrix[0].length - 1;


    let row = rowLength;

    let col = 0;



    /*
    note: we move to only two position wheather it is top and right && left and bottom 


    tc: O(m+n)
    
    */
    while (col <= colLength && row >= 0) {
        if (matrix[row][col] === target) {
            return true;

        }
        else if (matrix[row][col] < target) {
            col++;
        }
        else {
            row--;
        }

    }


    return false
};

const matrix =[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
let target =100


console.log(searchMatrix(matrix, target));


