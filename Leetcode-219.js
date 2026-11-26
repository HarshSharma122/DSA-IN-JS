var containsNearbyDuplicate = function (convert, k) {
  const set = new Set();

  let i = 0;

  while (i < convert.length) {
    if (i>k) {

        set.delete(convert[i-k-1]);
    }

    if (set.has(convert[i])) {
      return true;
    }

    set.add(convert[i]);
    i++;
  }



  return false;
};

const nums = [1, 2, 3,1,2,3];
let k = 2;

console.log(containsNearbyDuplicate(nums, k));
