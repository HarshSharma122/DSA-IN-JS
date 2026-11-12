/*
tc---O(n)
sc---O(1)


# can you solve it inplace if you string is mutable ---- mutable means you can change it after declartion 
*/
var reverseWords = function (s) {
    let coverttoarr = s.split(" ");


    console.log(coverttoarr);
    

    let arr = [];


    for (let i = 0; i < coverttoarr.length; i++) {
        if(coverttoarr[i] != ""){
            arr.push(coverttoarr[i]);
        }
    }


    let newArr = []
    

    for (let i = arr.length-1 ; i >= 0; i--) {
        newArr.push(arr[i]);
    }




    return newArr.join(" ");


};

const s = " hello world ";

console.log(reverseWords(s));

// join kya krta h join array ke string element ki aapase m add krke ek string bnata h bs yhi krt abs we join seperator in this so that we seperaye the string





/*

var reverseWords = function (s) {
    // let arr = [];

    // let i = s.length - 1;

    // while (i >= 0) {
    //     while (i >= 0 && s.charAt(i) == " ") {
    //         i--;
    //     }


    //     if (i < 0) {
    //         break;
    //     }

    //     let j = i;

    //     while (j >= 0 && s.charAt(j) != ' ') {
    //         j--;

    //     }
    //     let sub = s.substring(j + 1, i + 1);


    //     arr.push(sub);



    //     while (j >= 0 && s.charAt(j) == ' ') {
    //         j--;

    //     }


    //     if (j >= 0) {
    //         arr.push(" ");
    //     }


    //     i = j;
    // }



    // return arr.join("");



    let coverttoarr = s.split(" ");


    let arr = [];


    for (let i = 0; i < coverttoarr.length; i++) {
        if (coverttoarr[i] != '') {
            arr.push(coverttoarr[i]);
        }
    }


    let newArr = []


    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }




    return newArr.join(" ");

};


*/