var maxProfit = function (prices) {
  let MIN = prices[0];

  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < MIN) {
      MIN = prices[i];
    } 


    let sum = prices[i] - MIN;


    if(sum > ans ){
        ans = sum;
    }






  }


  return ans

};

const arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));


