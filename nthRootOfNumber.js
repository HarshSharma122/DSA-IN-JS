const NthRoot = (n, m) => {
  let s = 0;
  let e = m;
  let ans = -1;
  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);
    if (isthisAns(n, mid) === m) {
      ans = mid;
    }
    if (isthisAns(n,  mid) > m) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return ans;
};
const isthisAns = (n ,  mid)=>{

    let ans = 1;

    for (let i = 0; i < n; i++) {
        ans *= mid;
    }
    return ans;
}

console.log(NthRoot(4, 81));
