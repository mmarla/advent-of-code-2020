const { findValidPasswords, findValidPasswordsByPosition } = require("./");
const { readFileToArrStr } = require("../helpers");
const simpleInput = "./day2/inputs/simple.txt";
const complexInput = "./day2/inputs/complex.txt";

test("finds the number of valid passwords - simple input", () => {
  const data = readFileToArrStr(simpleInput);

  expect(findValidPasswords(data)).toBe(2);
});

test("finds the number of valid passwords - complex input", () => {
  const data = readFileToArrStr(complexInput);

  expect(findValidPasswords(data)).toBe(536);
});

test("finds the number of valid passwords by position- simple input", () => {
  const data = readFileToArrStr(simpleInput);

  expect(findValidPasswordsByPosition(data)).toBe(1);
});

test("finds the number of valid passwords by position- complex input", () => {
  const data = readFileToArrStr(complexInput);

  expect(findValidPasswordsByPosition(data)).toBe(558);
});
