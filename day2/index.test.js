const { findValidPasswords, findValidPasswordsByPosition } = require("./");
const readFile = require("../helpers");
const simpleInput = "./day2/simple-input.txt";
const complexInput = "./day2/complex-input.txt";

test("finds the number of valid passwords - simple input", async () => {
  const data = await readFile(simpleInput);

  expect(findValidPasswords(data)).toBe(2);
});

test("finds the number of valid passwords - complex input", async () => {
  const data = await readFile(complexInput);

  expect(findValidPasswords(data)).toBe(536);
});

test("finds the number of valid passwords by position- simple input", async () => {
  const data = await readFile(simpleInput);

  expect(findValidPasswordsByPosition(data)).toBe(1);
});

test("finds the number of valid passwords by position- complex input", async () => {
  const data = await readFile(complexInput);

  expect(findValidPasswordsByPosition(data)).toBe(558);
});
