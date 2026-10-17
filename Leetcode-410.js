var splitArray = function(nums, k) {
    if(nums.length<k){
        return -1;
    }
    let s = 0;
    let n = nums.length;
    let ans = -1;
    
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    let e = sum;


    
    while (s<=e) {
        let mid = Math.floor(s + (e-s)/2);
        

        if(isValidAns(nums, mid, k)){
            
            
            
            
            ans = mid;
            e = mid-1;
        }
        else{
            s = mid+1;
        }
    }



    return ans;
    
    
};



const isValidAns = (nums, mid, k)=>{
    let kCount = 1;
    let count = 0;



    for (let i = 0; i < nums.length; i++) {
        if(count + nums[i] <= mid){
            count = count + nums[i];
        }else{
            kCount++;

            if(kCount>k || nums[i]>mid){
                return false;
            }
            else{
                count = 0;
                count = count + nums[i];
            }
        }
        
    }


    return true;
}

const arr = [0,0];


console.log(splitArray(arr, 1));