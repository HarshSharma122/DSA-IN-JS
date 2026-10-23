var searchMatrix = function(matrix, target) {
    // time complexity ---0(log(m*n))



    /*
    we have 2 methods first one is linear search or another one is binary search

    pattern-------2d matrix




    bruteforce appraoch ---Linear

    optimal approach --- Binary
    

    */




    let s = 0;


    let e = (matrix.length * matrix[0].length) - 1;









    while (s<=e) {
        let mid = Math.floor(s + (e-s)/2);
        let row = Math.floor(mid / matrix[0].length);
        let col  = mid % matrix[0].length
        const midvalue = matrix[row][col];


        if( midvalue=== target){
            return true;
        }
        if(midvalue<target){
            s = mid + 1;
        }
        else{
            e = mid-1
        }
        
    }

    return false;





    
};

const matrix = [ [1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 100


console.log(searchMatrix(matrix, target));
