// climing staris
// this will give TLE 


var climbStairs = function(n) {
    if(n==1) return 1;
    if(n==2) return 2;

    return climbStairs(n-1) + climbStairs(n-2);
};


console.log(climbStairs(44));





/*

i have 2 steps to reach to top 

and so how many ways you have to 

first one is just one by one 

second one is 2 at a time 

*/