/* 
note: In this we find an inversion basically inversion means here just count the 


like if arr[i] > arr[j] || i < j then count++;

else nothing


this is brute force approach and time complexity is O(n2)
space complexity ---- O(1)

*/



/*
it is possilbe to solve this problem with in O(n) tc

*/

// var numberofInversion = function(arr) {

    
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if(arr[i] > arr[j]){
//                 count++;
//             }
    
//         }
        
//     }

//     return count;
// };



var numberofInversion = function(arr) {

    
};



const arr = [2, 3, 7, 1, 3, 5]
console.log(numberofInversion(arr));
