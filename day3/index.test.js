const { countTheTrees, multiplyTrees } = require("./");
const readFile = require("../helpers");
const simpleInput = "./day3/simple-input.txt";
const complexInput = "./day3/complex-input.txt";

const slopes = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 },
];

test("finds the number of trees - simple input", async () => {
  const data = await readFile(simpleInput);

  expect(countTheTrees(data, { x: 3, y: 1 })).toBe(7);
});

test("finds the number of trees - complex input", async () => {
  const data = await readFile(complexInput);

  expect(countTheTrees(data, { x: 3, y: 1 })).toBe(299);
});

test("finds the number of trees - simple input - slope a", async () => {
  const data = await readFile(simpleInput);

  expect(countTheTrees(data, { x: 1, y: 1 })).toBe(2);
});

test("finds the number of trees - simple input - slope b", async () => {
  const data = await readFile(simpleInput);

  expect(countTheTrees(data, { x: 3, y: 1 })).toBe(7);
});

test("finds the number of trees - simple input - slope c", async () => {
  const data = await readFile(simpleInput);

  expect(countTheTrees(data, { x: 5, y: 1 })).toBe(3);
});

test("finds the number of trees - simple input - slope d", async () => {
  const data = await readFile(simpleInput);

  expect(countTheTrees(data, { x: 7, y: 1 })).toBe(4);
});

test("finds the number of trees - simple input - slope e", async () => {
  const data = await readFile(simpleInput);

  expect(countTheTrees(data, { x: 1, y: 2 })).toBe(2);
});

test("multiplies all the tress from all the slopes - simple input", async () => {
  const data = await readFile(simpleInput);

  expect(multiplyTrees(data, slopes)).toBe(336);
});

test("multiplies all the tress from all the slopes - complex input", async () => {
  const data = await readFile(complexInput);

  expect(multiplyTrees(data, slopes)).toBe(3621285278);
});
