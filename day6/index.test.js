const { countAnswers, countUnanimous } = require("./index");
const {
  readFileToSomethingElse,
  readFileToSomethingElseAgain,
} = require("../helpers");
const simpleInput = "./day6/inputs/simple.txt";
const complexInput = "./day6/inputs/complex.txt";

test("finds the number of yes answers - simple input", () => {
  const data = readFileToSomethingElse(simpleInput);

  expect(countAnswers(data)).toBe(11);
});

test("finds the number of yes answers - complex input", () => {
  const data = readFileToSomethingElse(complexInput);

  expect(countAnswers(data)).toBe(6521);
});

test("finds the number of yes answers - simple input", () => {
  const data = readFileToSomethingElseAgain(simpleInput);

  expect(countUnanimous(data)).toBe(6);
});

test("finds the number of yes answers - complex input", () => {
  const data = readFileToSomethingElseAgain(complexInput);
  expect(countUnanimous(data)).toBe(3305);
});
