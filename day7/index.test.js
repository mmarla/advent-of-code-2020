const { countOuterBags } = require("./index");
const { readFileToArrStr } = require("../helpers");
const simpleInput = "./day7/inputs/simple.txt";
const complexInput = "./day7/inputs/complex.txt";

test("finds the number of outer bag - simple input", () => {
  const data = readFileToArrStr(simpleInput);

  expect(countOuterBags(data)).toBe(4);
});

test("finds the number of outer bag - complex input", () => {
  const data = readFileToArrStr(complexInput);

  expect(countOuterBags(data)).toBe(4); //254, //32
});
