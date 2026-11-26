/*
sliding window and two pointer

this method gives O(n2) TC so 
*/

var lengthOfLongestSubstring = function (s) {
  const convert = s.split(""); //convert to array
  let count = 0;
  let maxCount = 0;
  const set = new Set();
  let i = 0;
  let  j = 0;
  while (i < convert.length && j<convert.length) {
    if (!set.has(convert[i])) {
      set.add(convert[i]);
      count = set.size;
      if (count > maxCount) {
        maxCount = count;
      }
    
    } else {
      set.clear();
      count = 0;
      i=j;
      j++;
    }



    i++;
  }

  return maxCount;
};



console.log(lengthOfLongestSubstring("pwwkew"));