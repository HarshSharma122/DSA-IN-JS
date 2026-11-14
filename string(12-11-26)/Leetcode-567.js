/*
algo --- 
first we just go through on s1 
we just store the frequency of each char in s1 string
now we go to s2 string 
and the main part is to create a window of s1 length and gothrough on s2 
when we  create a window like 
e and i so count the frequency like 1 and 1 
and check with the freqency with s1
if match then return true if not 
then forward the window 
and e freancy convert to 0 and d frequency convert to 1 and this approach continuous untill the i value is equal to s2.length like traversal to complete 
*/

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  const map = new Map();
  for (const element of s1) {
    let count = (map.get(element) || 0) + 1;
    map.set(element, count);
  }

  const map1 = new Map();
  
  let windowLenght = s1.length;

  for (let i = 0; i < windowLenght; i++) {
    let char = s2.charAt(i);
    let count = (map1.get(char) || 0) + 1;
    map1.set(char, count);
  }

  if (comparefn(map, map1) == true) {
    return true;
  } else {
    let i = windowLenght;
    while (i < s2.length) {
      let newchar = s2.charAt(i);
      let count = (map1.get(newchar) || 0) + 1;
      map1.set(newchar, count);



      let oldcharIndex = i - windowLenght;

      let oldChar = s2.charAt(oldcharIndex);

      // now in map we convert index 1 to 0
      let countold = (map1.get(oldChar) || 0) - 1;
      map1.set(oldChar, countold);
      if (comparefn(map, map1)==true) {
        return true;
      }
      i++;
    }
  }

  return false;
};


const comparefn = (map, map1) => {
    for (const [key, value] of map) {
        if(map1.get(key) != value){
            return false;
        }

    }
    return true;


};

const s1 = "adc";
const s2 = "dcda";

console.log(checkInclusion(s1, s2));
