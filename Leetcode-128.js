/*
Steps :
first one is to sort the array --- here we use inbuilt method for sorting that's why complexity is O(nlogn)
if i use other sorting algo like merge sort then complexity is O(n)
second we just use hash map for remove dublicacy
third we just convert object into array of keys so that i just use loop through 
then we just make a group of longest consecutive and compare each group which group is bigger just put the count into ans;
so complexity is O(n logn)
sc: O(n)

*/

// var longestConsecutive = function (nums) {
//   let count = 1;
//   let ans = 1;
//   // sort the array
//   if (!nums.length) {
//     return 0;
//   }

//   nums.sort((a, b) => a - b); // O(nlogn)

//   // now store the each one frequency using map (hashing)

//   const map = new Map(); // O(n)
//   for (const element of nums) {
//     let count = (map.get(element) || 0) + 1;
//     map.set(element, count);
//   }

//   // now check each one and check the diff of each element and if the diff is 1 then count ++;

//   const convert = Array.from(map.keys()); // O(n)

//   for (let i = 0; i < convert.length-1; i++) {
//     // O(n)
//     if (convert[i] - convert[i + 1] == -1) {
//       count++;
//       if (count > ans) {
//         ans = count;
//       }
//     } else {
//       count = 1;
//     }
//   }

//   return ans;
// };
// // const nums = [0,3,7,2,5,8,4,6,0,1];
// const nums = [1,100];
// // const nums = [1, 2, 3, 4, 6, 7, 8,10,11,12,13,14,15,16];
// // const nums = [100,4,200,1,3,2];

// console.log(longestConsecutive(nums));






/*
solve within O(n) tc
*/


var longestConsecutive = function (nums) {
    




};

const nums = [0,3,7,2,5,8,4,6,0,1]




