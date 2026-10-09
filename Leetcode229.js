var majorityElement = function(nums) {
  const map = new Map();
  const n = nums.length;
  const appearTime = n/3;

  const ans = [];
  for (const element of nums) {
    let count = (map.get(element)||0) + 1;
    map.set(element, count);
    
  }



  for (const [key, value] of map.entries()) {
    if(value > appearTime){
        ans.push(key);
    }
  }
  


  console.log(ans);
  


};


// const nums = [3,2,3]
// const nums = [1,2];
const nums = [1];

console.log(majorityElement(nums));
