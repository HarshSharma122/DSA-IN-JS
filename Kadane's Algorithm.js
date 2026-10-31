const Kadane = (arr)=>{
    let sum = 0;
    let maxSum = -Infinity;



    let newArr = [];






    for(let i=0; i<  arr.length-1 ; i++){
        sum = sum  + arr[i];
        if(sum>maxSum){
            maxSum = sum;
        }
        if(sum<0){
            sum = 0;
         
            
        }
    }




    return newArr;
}


const nums = [1,2,3,4,5,6];


console.log(Kadane(nums));
