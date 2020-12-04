const {
  checkPassportsWithRequiredFields,
  checkPassportsWithValidInputs,
} = require("./index");
const readFile = require("../helpers");
const simpleInput = "./day4/simple-input.txt";
const complexInput = "./day4/complex-input.txt";
const invalidPassportsInput = "./day4/invalid-passports-input.txt";

test("finds the number valid passports - simple input", async () => {
  const data = await readFile(simpleInput);

  expect(checkPassportsWithRequiredFields(data)).toBe(2);
});

test("finds the number valid passports - complex input", async () => {
  const data = await readFile(complexInput);

  expect(checkPassportsWithRequiredFields(data)).toBe(204);
});

test("detects invalid passports", async () => {
  const data = await readFile(invalidPassportsInput);

  expect(checkPassportsWithValidInputs(data)).toBe(4);
});

test("detects invalid passports - complex input", async () => {
  const data = await readFile(complexInput);

  expect(checkPassportsWithValidInputs(data)).toBe(179);
});
