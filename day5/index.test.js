const { getHighest, getMissing } = require("./index");
const readFile = require("../helpers");
const simpleInput = "./day5/inputs/simple.txt";
const complexInput = "./day5/inputs/complex.txt";

test("finds boarding passes - simple input", async () => {
  const data = await readFile(simpleInput);

  expect(getHighest(data)).toBe(820);
});

test("finds boarding passes - simple input", async () => {
  const data = await readFile(complexInput);

  expect(getHighest(data)).toBe(947);
});

test("finds missing boarding pass - complex input", async () => {
  const data = await readFile(complexInput);

  expect(getMissing(data)).toBe(636);
});
