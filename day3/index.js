const expandMap = (arr) => arr.map((e, i) => (e += arr[i]));

const isLastLine = (acc, data) => acc.y > data.length - 1;
const isLastColumn = (acc) => acc.x >= acc.map[acc.y].length;
const isTree = (acc) => acc.map[acc.y].charAt(acc.x) === "#";

const countTheTrees = (data, { x, y }) =>
  data.reduce(
    (acc) => {
      acc.x += x;
      acc.y += y;

      if (isLastLine(acc, data)) return acc;

      if (isLastColumn(acc)) {
        acc.map = expandMap(acc.map);
      }

      if (isTree(acc)) {
        acc.trees++;
      }

      return acc;
    },
    { trees: 0, x: 0, y: 0, map: data }
  ).trees;

const multiplyTrees = (data, slopes) =>
  slopes.reduce((acc, slope) => acc * countTheTrees(data, slope), 1);

module.exports = { countTheTrees, multiplyTrees };
