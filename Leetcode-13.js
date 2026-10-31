/*
problem: Convert roman to Int

tc-----O(n)
sc-----O(n)



learnings ====== why if else condition exist what is the purpose of this condition the best case i learned from that 
is that if i use if statement on check every condition it will go to every if and if any if fail then go to else but if first 
if statement is true then why we go to else part there is no need to go but the solution is simple to use  (else if) statment 
mtlb agr if wala section true hua toh else if m jana hi nhi h like stop 








*/


var romanToInt = function (s) {
  const arr = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let count = 0;

  let i = 0;

  while (i < s.length) {
    let currentChar = s.charAt(i);
    let nextChar = s.charAt(i + 1);

    if (currentChar === "I" && nextChar === "V") {
      count = count + (arr[nextChar] - arr[currentChar]);
      i = i + 2;
    } else if (currentChar === "I" && nextChar === "X") {
      count = count + (arr[nextChar] - arr[currentChar]);
      i = i + 2;
    } else if (currentChar === "X" && nextChar === "L") {
      count = count + (arr[nextChar] - arr[currentChar]);
      i = i + 2;
    } else if (currentChar === "X" && nextChar === "C") {
      count = count + (arr[nextChar] - arr[currentChar]);
      i = i + 2;
    } else if (currentChar === "C" && nextChar === "D") {
      count = count + (arr[nextChar] - arr[currentChar]);
      i = i + 2;
    } else if (currentChar === "C" && nextChar === "M") {
      count = count + (arr[nextChar] - arr[currentChar]);
      i = i + 2;
    } else {
      i++;

      count = count + arr[currentChar];
    }
  }

  return count;
};

const s = "MCMXCIV";
// const s = "CMXC";

console.log(romanToInt(s));

/*
1000 + 1900

*/
