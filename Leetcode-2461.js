var maximumSubarraySum = function (nums, k) {
  let maxSum = 0;
  let sum = 0;

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {

    if (!set.has(nums[i])) {
      set.add(nums[i]);
      sum += nums[i];
    } 
    
    else if (set.has(nums[i])) {
      set.delete(nums[i-i]);
      sum -= nums[i-i];


      set.add(nums[i]);
      sum += nums[i];
    }

    if (set.size == k) {


        
      maxSum = Math.max(maxSum, sum);
      
      set.delete(nums[i - (k - 1)]);
      sum -= nums[i - (k - 1)];
    }

    
    // 2 - 2
  }

  return maxSum;
};
// const nums = [5,3,3,1,1];
const nums = [1, 1, 1, 7, 8, 9];
let k = 3;

console.log(maximumSubarraySum(nums, k));
