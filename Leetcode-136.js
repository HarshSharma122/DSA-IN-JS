var singleNumber = function (nums) {
  let map = new Map();

  for (const element of nums) {
    let count = (map.get(element) || 0) + 1;
    map.set(element, count);
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      return key;
    }
  }
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));

