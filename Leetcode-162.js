var findPeakElement = function (nums) {
  let s = 0;
  let e = nums.length - 1;


  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);
    if (nums[mid] < nums[mid + 1]) {
      s = mid + 1;
      
    } else {
      e = mid-1;
    }
  }

  return s;
};

const ans = [1, 2, 1, 3, 5, 6, 4];

console.log(findPeakElement(ans));
