const getMid = (min, max) => (max - min) / 2;

const getUpper = ({ min, max }) => {
  const newLower = min + getMid(min, max);
  return {
    min: newLower,
    max,
  };
};

const getLower = ({ min, max }) => {
  const newUpper = max - getMid(min, max);
  return {
    min,
    max: newUpper,
  };
};

const chooseHighest = (range) => range.max - 1;
const chooseLowest = (range) => range.min;

const mapped = {
  F: getLower,
  L: getLower,
  B: getUpper,
  R: getUpper,
};

const otherMap = {
  F: chooseLowest,
  L: chooseLowest,
  B: chooseHighest,
  R: chooseHighest,
};

const getList = (data) => {
  const lala = data.map((line) => {
    const values = line.split("").reduce(
      (range, letter, index) => {
        if (index === 9) {
          return { ...range, column: otherMap[letter](range) };
        }
        if (index === 6) {
          return { min: 0, max: 8, row: otherMap[letter](range) };
        }
        if (index > 6) {
          const newRange = mapped[letter](range);
          return { ...range, ...newRange };
        }
        const newRange = mapped[letter](range);

        return { ...range, ...newRange };
      },
      { min: 0, max: 128 }
    );
    return values.row * 8 + values.column;
  });
  return lala.sort((a, b) => a - b);
};

const getHighestBoardingPass = (data) =>
  getList(data).filter((_, i, arr) => i === arr.length - 1)[0];

const getMissingBoardingPass = (data) => {
  const numArray = getList(data);
  let number = 0;

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] - numArray[i - 1] != 1) {
      number = numArray[i - 1] + 1;
    }
  }
  return number;
};

module.exports = { getHighestBoardingPass, getMissingBoardingPass };
