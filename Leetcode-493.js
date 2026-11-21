var reversePairs = function(nums) {
  
    let count = 0;


    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {

            if(nums[i] > 2*nums[j]){
                count++;
            }
        }   
    }

    return count;
    

};
// const nums = [1,3,2,3,1]
const nums = [2,4,3,5,1]
// const nums = [-5,-5]




console.log(-5>-10);

console.log(reversePairs(nums));
