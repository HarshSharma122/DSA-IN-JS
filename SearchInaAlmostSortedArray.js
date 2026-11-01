const search = (arr, target) => {
  let s = 0;

  let e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid - 1] == target) {
      return mid - 1;
    }
    if (arr[mid + 1] == target) {
      return mid + 1;
    }

    if (arr[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return -1;
};

const arr = [1, 2, 4, 6, 5, 8, 7];
console.log(search(arr, 7));
