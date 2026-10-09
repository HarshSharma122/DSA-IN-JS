// var maxProfit = function (prices) {
//   let MIN = prices[0];
//   let n = prices.length;
//   let MAX = n;

//   let MIN_INDEX = 0;
//   let MAX_INDEX = n - 1;

//   for (let i = 0; i < n; i++) {
//     if (prices[i] < MIN) {
//       MIN = prices[i];
//       MIN_INDEX = i;
//     } else if (prices[i] > MAX) {
//       MAX = prices[i];
//       MAX_INDEX = i;
//     }
//   }


//   if(MIN_INDEX>MAX_INDEX){
//     for (let i = 0; i < n; i++) {

//     }
//   }
  




// };

const arr = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(arr));




let max = 0;



for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max = arr[i];
    }
    
}


console.log(max);
