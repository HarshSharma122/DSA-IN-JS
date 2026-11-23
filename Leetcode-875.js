var minEatingSpeed = function(piles, h) {
    let min = piles[0];
    let max = 0;
    for (let i = 0; i < piles.length; i++) {
        if(min>piles[i]){
            min = piles[i];
        }
        if(max<piles[i]){
            max = piles[i];
        }
    }
    let s = 0;
    let e = max;
    let ans = -1;
    while (s<=e) {
        let mid = Math.floor(s + (e-s)/2)
        if(isThisAns(piles, h, mid)){
            ans  = mid;
            e = mid - 1;
        }
        else{
            s = mid + 1;
        }
    }
    return ans;
};
const isThisAns = (piles, h, mid)=>{
    let totalHours = 0;
    for (let i = 0; i < piles.length; i++) {
        totalHours += Math.ceil(piles[i] / mid);
    }
    if(totalHours <= h){
        return true;
    }
    else{
        return false;
    }
}
const piles = [3,6,7,11]
let h = 8
console.log(minEatingSpeed(piles, h));

