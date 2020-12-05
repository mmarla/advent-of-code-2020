const getMid = (min, max) => (max - min) / 2;

const selectUpper = ({ min, max }) => ({
  min: min + getMid(min, max),
  max,
});

const selectLower = ({ min, max }) => ({
  min,
  max: max - getMid(min, max),
});

const chooseHighest = (range) => range.max - 1;

const chooseLowest = (range) => range.min;

const selection = {
  F: selectLower,
  L: selectLower,
  B: selectUpper,
  R: selectUpper,
};

const last = {
  F: chooseLowest,
  L: chooseLowest,
  B: chooseHighest,
  R: chooseHighest,
};

const getPosition = (arr, max) =>
  arr.reduce(
    (range, letter, i) => {
      if (i === arr.length - 1) return last[letter](range);

      return { ...range, ...selection[letter](range) };
    },
    { min: 0, max }
  );

const getList = (data) =>
  data
    .map((line) => {
      const row = getPosition(Array.from(line.substring(0, 7)), 128);
      const column = getPosition(Array.from(line.substring(7)), 8);

      return row * 8 + column;
    })
    .sort((a, b) => a - b);

const getHighest = (data) =>
  getList(data).filter((_, i, arr) => i === arr.length - 1)[0];

const getMissing = (data) =>
  getList(data).reduce(
    (acc, num, i, arr) => (num - arr[i - 1] !== 1 ? num - 1 : acc),
    0
  );

module.exports = { getHighest, getMissing };
