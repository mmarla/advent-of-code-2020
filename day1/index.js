const sortArr = (arr) => arr.map(Number).sort((a, b) => a - b);

const findSumOfPair = (data) => {
  const sorted = sortArr(data);
  let i = 0;
  let j = sorted.length - 1;

  while (i < j) {
    const sum = sorted[i] + sorted[j];

    if (sum === 2020) return sorted[i] * sorted[j];

    if (sum < 2020) {
      i++;
    } else {
      j--;
    }
  }
};

const findSumOfTriple = (data) => {
  const sorted = sortArr(data);

  for (let i = 0; 1 < sorted.length - 2; i++) {
    let l = i + 1;
    let j = sorted.length - 1;

    while (l < j) {
      const sum = sorted[i] + sorted[l] + sorted[j];

      if (sum === 2020) return sorted[i] * sorted[l] * sorted[j];

      if (sum < 2020) {
        l++;
      } else {
        j--;
      }
    }
  }
};

module.exports = { findSumOfPair, findSumOfTriple };
