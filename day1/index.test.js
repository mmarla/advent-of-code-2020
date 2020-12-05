const { findSumOfPair, findSumOfTriple } = require("./");
const { readFileToArrStr } = require("../helpers");
const simpleInput = "./day1/inputs/simple.txt";
const complexInput = "./day1/inputs/complex.txt";

test("sums a pair to 2020 - simple data set", () => {
  const data = readFileToArrStr(simpleInput);

  expect(findSumOfPair(data)).toBe(514579);
});

test("sums a pair to 2020 - complex data set", () => {
  const data = readFileToArrStr(complexInput);

  expect(findSumOfPair(data)).toBe(964875);
});

test("sums a trio to 2020 - simple data set", () => {
  const data = readFileToArrStr(simpleInput);

  expect(findSumOfTriple(data)).toBe(241861950);
});

test("sums a trio to 2020 - complex data set", () => {
  const data = readFileToArrStr(complexInput);

  expect(findSumOfTriple(data)).toBe(158661360);
});
