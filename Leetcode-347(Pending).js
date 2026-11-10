var topKFrequent = function (nums, k) {
  const map = new Map();

  const newArr = [];

  let count = 0;
  let max = 0;

  for (const element of nums) {
    let count = (map.get(element) || 0) + 1;
    map.set(element, count);
  }





  for (const [i,j] of map.entries()) {

    
    
    
  }
};

const arr = [1, 1, 1, 2, 2, 3];
let k = 2;

console.log(topKFrequent(arr, k));
