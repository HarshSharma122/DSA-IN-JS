var maxDistance = function(arr, m) {
    

    arr.sort();



    let s = 0;

    let n = arr.length;
    let e = arr[n-1] - arr[0];


    let ans = -1

    while (s<=e) {

        let mid = s + (e-s)/2;


        if(isValidAns(arr, mid, m)){
            s = mid + 1;
            ans = mid;


        }
        else{
            e = mid - 1;
        }
        



    }



    return ans;
    
};



const isValidAns  = (arr, mid, m)=>{
    let count = 1;

    let position = 0;





    for (let i = 1; i < arr.length; i++) {
        if(arr[i] - arr[position]>=mid){
            count++;


            position = i;


            if(count==m){
                return true
            }
        }
        
    }

    return false;
}
const arr = [1,2,3,4,7];

console.log(maxDistance(arr, 3));