var majorityElement = function(nums) {
    let map = new Map();
    let max = 0;
    let key =0;

    
    for (const element of nums) {
        let count = (map.get(element)||0)+1;
        map.set(element, count);
        if(max < count){
            max = count;
            key = element;
        }
    }
    console.log(key);
};

const nums = [1,1,1];
console.log(majorityElement(nums));