const { countAcc, fixProgram } = require("./index");
const { readFileToArrStr } = require("../helpers");
const simpleInput = "./day8/inputs/simple.txt";
const complexInput = "./day8/inputs/complex.txt";

test("counts the accumulator - simple input", () => {
  const data = readFileToArrStr(simpleInput);

  expect(countAcc(data).acc).toBe(5);
});

test("counts the accumulator - simple input", () => {
  const data = readFileToArrStr(complexInput);

  expect(countAcc(data).acc).toBe(1939);
});


test("counts the accumulator - simple input", () => {
  const data = readFileToArrStr(simpleInput);

  expect(fixProgram(data)).toBe(5);
});