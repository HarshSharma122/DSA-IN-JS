const parata = (ranks, n, l) => {
  let s = 0;

  let max = 0;

  for (let index = 0; index < ranks.length; index++) {
    if (max < ranks[index]) {
      max = ranks[index];
    }
  }

  let e = max * [(n * (n + 1)) / 2];

  let ans = -1;

  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);

    if (isvalidAns(ranks, mid, n)) {
      ans = mid;
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return ans;
};

const isvalidAns = (ranks, timelimit, noofParata) => {
  let countofmadeParata = 0;

  for (let i = 0; i < ranks.length; i++) {
    const rankofcook = ranks[i];

    let time = 0;

    let j = 1;

    while (time <= timelimit) {
      if (time + j * rankofcook <= timelimit) {
        countofmadeParata++;
        j++;
      } else {
        break;
      }
    }

    if (countofmadeParata >= noofParata) {
      return true;
    }
  }

  if (countofmadeParata >= noofParata) {
    return true;
  } else {
    return false;
  }
};

const arr = [1, 2, 3, 4];
const l = 4;

const n = 10;

console.log(parata(arr, n, l));
