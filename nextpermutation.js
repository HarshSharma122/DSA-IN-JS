
/*
this is leetcode 31 problem

this problem will solve in 3 steps 


first step is just get the pivot point 

second step is to swap the pivot point and right most element 

third step is to swap all elements from pivot +1 to n-1





*/


var nextPermutation = function (nums) {
    let pivot = -1;
    let n = nums.length-1;
    for (let i = n; i >=0 ; i--) {
        if(nums[i]>nums[i-1]){
            pivot= i-1;
            break;
        }
        
    }


    if(pivot==-1){
        return nums.reverse();
    }


    for (let i = n; i > pivot; i--) {

        if(nums[i]>nums[pivot]){
            let temp = nums[pivot];
            nums[pivot] = nums[i];
            nums[i] = temp;


            break;
        }
        

    }



    let s = pivot+1;

    let e = n;



    while (s<=e) {
        let temp = nums[s];

        nums[s]= nums[e];


        nums[e] = temp;
        s++;
        e--;
    }







    return nums;







    
};

const nums = [3,2,1];

console.log(nextPermutation(nums));
