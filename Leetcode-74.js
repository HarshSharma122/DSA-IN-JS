var searchMatrix = function (matrix, target) {
  // time complexity ---0(log(m*n))

  /*
    we have 2 methods first one is linear search or another one is binary search

    pattern-------2d matrix




    bruteforce appraoch ---Linear

    optimal approach --- Binary
    

    */

  let rowLength = matrix.length;
  let colLength = matrix[0].length;

  let s = 0;

  let e = rowLength * colLength - 1;

  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    let rowIndex = Math.floor(mid / colLength);

    let colIndex = mid % colLength;

    let search = matrix[rowIndex][colIndex];

    if (search === target) {
      return true;
    } else if (search > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 30;

console.log(searchMatrix(matrix, target));
