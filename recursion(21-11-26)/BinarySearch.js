var search = function (nums, target) {
    let s = 0;
    let e = nums.length-1;

    return solve(nums, target, s, e);
};



var solve = function(nums, target, s, e ){
    if(s>e){
        return -1;
    }
    let mid = Math.floor(s + (e-s)/2)
    if(nums[mid]===target){
        return mid;
    }
    if(nums[mid]>target){
        e = mid - 1;
    }
    else if(nums[mid]<target){
        s = mid +1;
    }



    return solve(nums, target, e, e);
}

const nums = [-1,0,3,5,9,12] 
let target = 9

console.log(search(nums, target));
