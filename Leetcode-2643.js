var rowAndMaximumOnes = function (mat) {
    let max = 0;

    let indexR = 0


    const newArr = [];


    mat.map((m, index)=>{
       const count = m.filter(o=>o===1).length;

       if(count>max){
        indexR = index
        max = count;
       }

       
        
    })

    newArr.push(indexR, max)



    return newArr

    
  
};

const mat = [
  [0, 1, 0],
  [0, 1, 1],
  [0, 0, 0],
];
console.log(rowAndMaximumOnes(mat));
