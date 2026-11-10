var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }

    // bubble sort on every iteration bigger one placed to its actual location
    // rounds ==== n-1
    // tc-- O(n*2)

    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i-1; j++) {
            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
        
    }


    console.log(nums);
    




};
const arr = [-4,-1,0,3,10]
console.log(sortedSquares(arr));