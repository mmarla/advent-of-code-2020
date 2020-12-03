const expandMap = (arr) => arr.map((e, i) => (e += arr[i]));

const countTheTrees = (data, { x, y }) =>
  data.reduce(
    (acc) => {
      acc.x += x;
      acc.y += y;

      const end = acc.y > data.length - 1;

      if (end) return acc;

      if (acc.x >= acc.mapCopy[acc.y].length) {
        acc.mapCopy = expandMap(acc.mapCopy);
      }

      const tree = acc.mapCopy[acc.y].charAt(acc.x) === "#";

      if (tree) {
        acc.trees++;
      }
      return acc;
    },
    { trees: 0, x: 0, y: 0, mapCopy: data }
  ).trees;

const multiplyTrees = (data, slopes) =>
  slopes.reduce((acc, slope) => acc * countTheTrees(data, slope), 1);

module.exports = { countTheTrees, multiplyTrees };
