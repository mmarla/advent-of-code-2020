const { countTheTrees, multiplyTrees } = require("./");
const { readFileToArrStr } = require("../helpers");
const simpleInput = "./day3/inputs/simple.txt";
const complexInput = "./day3/inputs/complex.txt";

const slopes = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 },
];

test("finds the number of trees - simple input", () => {
  const data = readFileToArrStr(simpleInput);

  expect(countTheTrees(data, { x: 3, y: 1 })).toBe(7);
});

test("finds the number of trees - complex input", () => {
  const data = readFileToArrStr(complexInput);

  expect(countTheTrees(data, { x: 3, y: 1 })).toBe(299);
});

test("finds the number of trees - simple input - slope a", () => {
  const data = readFileToArrStr(simpleInput);

  expect(countTheTrees(data, { x: 1, y: 1 })).toBe(2);
});

test("finds the number of trees - simple input - slope b", () => {
  const data = readFileToArrStr(simpleInput);

  expect(countTheTrees(data, { x: 3, y: 1 })).toBe(7);
});

test("finds the number of trees - simple input - slope c", () => {
  const data = readFileToArrStr(simpleInput);

  expect(countTheTrees(data, { x: 5, y: 1 })).toBe(3);
});

test("finds the number of trees - simple input - slope d", () => {
  const data = readFileToArrStr(simpleInput);

  expect(countTheTrees(data, { x: 7, y: 1 })).toBe(4);
});

test("finds the number of trees - simple input - slope e", () => {
  const data = readFileToArrStr(simpleInput);

  expect(countTheTrees(data, { x: 1, y: 2 })).toBe(2);
});

test("multiplies all the tress from all the slopes - simple input", () => {
  const data = readFileToArrStr(simpleInput);

  expect(multiplyTrees(data, slopes)).toBe(336);
});

test("multiplies all the tress from all the slopes - complex input", () => {
  const data = readFileToArrStr(complexInput);

  expect(multiplyTrees(data, slopes)).toBe(3621285278);
});
