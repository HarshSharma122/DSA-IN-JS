/*
TC-- O(n)
SC-- O(n) because we create a new array 


*/

var removeDuplicates = function (s) {
  const sp = s.split(""); /// O(n)

  let newArr = [];

  newArr.push(s[0]); // O(1)

  let i = 1;

  while (i < sp.length) {
    const rightmost = newArr[newArr.length - 1];
    if (sp[i] == rightmost) {
      newArr.pop(); // O(1)
    } else {
      newArr.push(sp[i]); // // O(1)
    }

    i++;
  }

  return newArr.join(""); // O(n)
};

const s = "abbaca";

console.log(removeDuplicates(s));