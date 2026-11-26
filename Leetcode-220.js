/*
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        Math.abs(i - j) <= indexDiff &&
        Math.abs(nums[i] - nums[j]) <= valueDiff
      ) {
        return true;
      }
    }
  }

  return false;



  this method is brute force method O(n2)


*/

var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  
};

let nums = [1, 2, 3, 1];
let indexDiff = 3,
  valueDiff = 0;
console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));
