/*
we have 3 steps 


**** first one is to find the pivot but in this we travse the array from backward when arr[i] > arr[i-1] store the povot and break the loop

****second step is to search the element from the pivot +1 array from back use the loop to find the just great number from the pivot and then reverse the pivot and that number 
****third step is to reverse all elements from pivot +1 and n-1 


***** you get the ans 


*/


var permute = function (nums) {
  let n = nums.length;
  let pivot = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      pivot = i - 1;
      break;
    }
  }

  

  if (pivot == -1) {
    return nums.reverse();
  }

  for (let i = n - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      let temp = arr[pivot];
      arr[pivot] = arr[i];
      arr[i] = temp;
      break;
    }
  }

  let s = pivot + 1;

  let e = n - 1;

  while (s <= e) {
    let temp = arr[s];

    arr[s] = arr[e];

    arr[e] = temp;

    s++;

    e--;
  }

  return nums;
};

const arr = [2,3,1];

console.log(permute(arr));
