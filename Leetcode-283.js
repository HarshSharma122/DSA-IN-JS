const moveZeros = (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] === 0) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
const nums = [0, 1, 0, 3, 12, 0, 0];
console.log(moveZeros(nums));

