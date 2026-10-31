const pivotPoint = (arr) => {
  let s = 0;

  let n = arr.length - 1;
  let e = n;

  let ans = -1;

  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (arr[mid] <= arr[n]) {
      e = mid - 1;
    } else {
      ans = mid;
      s = e + 1;
    }
  }

  return ans;
  
};


const nums = [1,2,1,3,5,6,4];

console.log(pivotPoint(nums));
