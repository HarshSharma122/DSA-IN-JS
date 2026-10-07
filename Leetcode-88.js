// Brute force approach
const merge_using_bruteForce = (nums1, m, nums2, n) => {
  nums1.length = m;

  nums1.push(...nums2); // ... this is called spread operator
  //   nums1.sort((a, b) => a - b);

  // use bubble sort for sorting the array

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length - i - 1; j++) {
      if (nums1[j] > nums1[j + 1]) {
        let temp = nums1[j];

        nums1[j] = nums1[j + 1];

        nums1[j + 1] = temp;
      }
    }
  }

  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 3, 5];

console.log(merge_using_bruteForce(nums1, 3, nums2, 3));
