const { getHighest, getMissing } = require("./index");
const { readFileToArrStr } = require("../helpers");
const simpleInput = "./day5/inputs/simple.txt";
const complexInput = "./day5/inputs/complex.txt";

test("finds boarding passes - simple input", () => {
  const data = readFileToArrStr(simpleInput);

  expect(getHighest(data)).toBe(820);
});

test("finds boarding passes - simple input", () => {
  const data = readFileToArrStr(complexInput);

  expect(getHighest(data)).toBe(947);
});

test("finds missing boarding pass - complex input", () => {
  const data = readFileToArrStr(complexInput);

  expect(getMissing(data)).toBe(636);
});
