var intersection = function(nums1, nums2) {


    const newArr = [];



    // for (let i = 0; i < nums1.length; i++) {
    //     if(newArr.includes(nums1[i])){
    //         continue;
    //     }

    //     if(nums2.includes(nums1[i])){
    //         newArr.push(nums1[i])
    //     }
        
    // }
    

    // console.log(newArr);
    







    const map1 = new Map();

    const map2 = new Map();





    for (const element of nums1) {
        let count = (map1.get(element)||0)+1;
        map1.set(element, count);
    }
    for (const element of nums2) {
        let count = (map2.get(element)||0)+1;
        map2.set(element, count);
    }
    


    if(map1.has(map2.keys())){
        console.log(map1.keys());
        
    }
    





    



    

    // console.log(newArr);
    
    
};


const nums1 = [1,2,2,1] 
const nums2 = [2,2]




console.log(intersection(nums1, nums2));
