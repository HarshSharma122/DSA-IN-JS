var maxSubArray = function(nums) {
    let max_sum = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
     sum = sum + nums[i];
     if(max_sum<sum){
        max_sum= sum;
     }
     if(sum<0){
        sum=0;
     }  
    }
    return max_sum
}
const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
