

const Pivot = (nums) => {
    let n = nums.length - 1;
    let s = 0;
    let e = n;
    let ans = -1;
    while (s <= e) {
        let mid = Math.floor(s + (e - s) / 2);
        if (nums[mid] <= nums[n]) {
            e = mid - 1
        } else {
            ans = mid;
            s = mid + 1;
        }

    }
    return ans;


    
//   let ans = -1;


//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i]>nums[i+1]){
//       ans = i;
//       break;
//     }
    
//   }

//   return ans;
}



const binary = (nums, s, e, target) => {
   
    while (s <= e) {
        let mid = Math.floor(s + (e - s) / 2);



        if (nums[mid] === target) {
            return true;
        }
        else if (nums[mid] < target) {
            s = mid + 1;
        }
        else {
            e = mid - 1
        }
    }

    return false;
}



var search = function (nums, target) {
    let n = nums.length - 1;

    const pivot = Pivot(nums);

    if(pivot == -1){
        const ans =  binary(nums, 0, n, target);
        return ans;
    }
    let leftSideFirstIndex = 0;
    let leftSideLastIndex = pivot;


    let rightSideFirstIndex = pivot + 1;
    let rightSideLastIndex = n;



    // ans will be in leftside
    if (target <= nums[leftSideLastIndex] &&  target >= nums[leftSideFirstIndex]) {
         let ans = binary(nums, leftSideFirstIndex, leftSideLastIndex, target);
         return ans;
    } else if (target <= nums[rightSideLastIndex] && target >= nums[rightSideFirstIndex]) {
         let ans = binary(nums, rightSideFirstIndex, rightSideLastIndex, target);
         return ans;


    }
    return false;



};


const nums = [1,0,1,1,1];


console.log(search(nums, 0));
