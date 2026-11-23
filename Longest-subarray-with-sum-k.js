const longestSubarray = (nums, k) => {
  let count = 0;
  let sum = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    count++;
    if (sum == k) {
      if (count > maxCount) {
        maxCount = count;
        count = 0;
        sum = 0;
        i = i-1;
      }
    }
  }
  

  return maxCount
};
const nums = [10, 5, 2, 7];
// const nums =[-3, 2, 1]
console.log(longestSubarray(nums, 15));
/*

let count = 0;

let sum = 0;

let maxcount = 0;

1 2




maxcount = 2;
count  = 0 ;

for(let i=0; i<n; i++){
sum += nums[i];
count++;
if(sum == k){
if(count>maxCount){
maxCount = count;
count = 0;

}
 }

}
*/
