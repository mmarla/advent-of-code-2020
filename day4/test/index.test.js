const { checkRequiredFields, checkValidInputs } = require("../index");
const { readFileToArrObj } = require("../../helpers");
const simpleInput = "./day4/inputs/simple.txt";
const complexInput = "./day4/inputs/complex.txt";
const invalidPassportsInput = "./day4/inputs/invalid-passports.txt";

test("finds the number valid passports - simple input", () => {
  const data = readFileToArrObj(simpleInput);

  expect(checkRequiredFields(data)).toBe(2);
});

test("finds the number valid passports - complex input", () => {
  const data = readFileToArrObj(complexInput);

  expect(checkRequiredFields(data)).toBe(204);
});

test("detects invalid passports", () => {
  const data = readFileToArrObj(invalidPassportsInput);

  expect(checkValidInputs(data)).toBe(4);
});

test("detects invalid passports - complex input", () => {
  const data = readFileToArrObj(complexInput);

  expect(checkValidInputs(data)).toBe(179);
});
