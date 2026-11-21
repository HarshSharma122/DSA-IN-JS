var compress = function (chars) {
  /*
    if the length is one so just append the chararcyer only
    if the length is more than 1 so sppend the charcer and how many timesss comes
    */


    let index = 0;

  for (let i = 0; i < chars.length; i++) {
    let ch = chars[i];

    let count = 0;

    while (i < chars.length &&  chars[i]===ch) {
      count++;
      i++;
    }

      chars[index++] = ch;     
    if(count>1){
      
      for (const element of String(count)) {
      
        chars[index++] = element;     
        
      }
    
    }




    


  }



  return index
};

const chars = [
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "a",
  "a",
  "a",
];
console.log(compress(chars));
