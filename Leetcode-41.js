var firstMissingPositive = function (nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;

  let presentSum = 0;

  for (let i = 0; i < n; i++) {
    if(nums[i]>=0){
        presentSum += nums[i];
    }
  }

  return expectedSum - presentSum;
};

const nums = [3,4,-1,1];

console.log(firstMissingPositive(nums));

