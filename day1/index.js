const sortArr = (arr) => arr.map(Number).sort((a, b) => a - b);

const findSumOfPair = (data) => {
  const arr = sortArr(data);
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const sum = arr[i] + arr[j];

    if (sum === 2020) return arr[i] * arr[j];

    if (sum < 2020) {
      i++;
    } else {
      j--;
    }
  }
};

const findSumOfTriple = (data) => {
  const arr = sortArr(data);

  for (let i = 0; 1 < arr.length - 2; i++) {
    let l = i + 1;
    let j = arr.length - 1;

    while (l < j) {
      const sum = arr[i] + arr[l] + arr[j];

      if (sum === 2020) return arr[i] * arr[l] * arr[j];

      if (sum < 2020) {
        l++;
      } else {
        j--;
      }
    }
  }
};

module.exports = { findSumOfPair, findSumOfTriple };
