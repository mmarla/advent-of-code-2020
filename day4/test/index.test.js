const { checkRequiredFields, checkValidInputs } = require("../index");
const readFile = require("../parser");
const simpleInput = "./day4/inputs/simple.txt";
const complexInput = "./day4/inputs/complex.txt";
const invalidPassportsInput = "./day4/inputs/invalid-passports.txt";

test("finds the number valid passports - simple input", async () => {
  const data = await readFile(simpleInput);

  expect(checkRequiredFields(data)).toBe(2);
});

test("finds the number valid passports - complex input", async () => {
  const data = await readFile(complexInput);

  expect(checkRequiredFields(data)).toBe(204);
});

test("detects invalid passports", async () => {
  const data = await readFile(invalidPassportsInput);

  expect(checkValidInputs(data)).toBe(4);
});

test("detects invalid passports - complex input", async () => {
  const data = await readFile(complexInput);

  expect(checkValidInputs(data)).toBe(179);
});
