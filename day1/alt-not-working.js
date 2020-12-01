const findSumOfTriple = (data) => {
  const sorted = sortArr(data);

  let i = 0;
  let j = sorted.length - 1;

  while (i <= j) {
    const start = sorted[i];
    const end = sorted[j];
    const sum = start + end;

    if (sum < 2020) {
      const difference = 2020 - sum;
      const k = sorted.indexOf(difference);

      if (k >= 0) {
        return start * sorted[k] * end;
      }

      i++;
    } else {
      j--;
    }
  }
  return null;
};
