/*
tc--- O(nlogn)
sc--- O(n)

*/

const frequentChar = (s)=>{
    const divide = s.split("");/*---- O(n) */

    const sor = divide.sort(); /*---- O(nlogn) */
    
    const map = new Map(); /*---- O(n) */


    for (const element of sor) { /*---- O(n) */
        const count = (map.get(element)||0) + 1;
        map.set(element, count);
    }


    // count is completed then i want that how i get the bigger string according to lexicographically



    let max = 0;

    let ans = 0;



    for (const [key, value] of map.entries()) { /*---- O(m) */
        if(max<value){
            max = value;
            ans = key;
        }
    }


    return ans;

}


const s = "output"
console.log(frequentChar(s))


