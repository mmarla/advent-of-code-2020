const { TestScheduler } = require("jest");
const validators = require("./validators");

const {
  checkBirthYear,
  checkIssueYear,
  checkExpYear,
  checkHeight,
  checkHairColour,
  checkEyeColour,
  checkPassportId,
} = require("./validators");

test("validates birth year", () => {
  const valid = "2002";
  const invalid = "2003";

  expect(checkBirthYear(valid)).toBe(true);
  expect(checkBirthYear(invalid)).toBe(false);
});

test("validates height", () => {
  const valid1 = "60in";
  const valid2 = "190cm";
  const invalid1 = "190in";
  const invalid2 = "190";
  const invalid3 = "100cm";

  expect(checkHeight(valid1)).toBe(true);
  expect(checkHeight(valid2)).toBe(true);
  expect(checkHeight(invalid1)).toBe(false);
  expect(checkHeight(invalid2)).toBe(false);
  expect(checkHeight(invalid3)).toBe(false);
});

test("validates hair color", () => {
  const valid = "#123abc";
  const invalid1 = "#123abz";
  const invalid2 = "123abc";

  expect(checkHairColour(valid)).toBe(true);
  expect(checkHairColour(invalid1)).toBe(false);
  expect(checkHairColour(invalid2)).toBe(false);
});

test("validates eye color", () => {
  const valid = "brn";
  const invalid = "wat";

  expect(checkEyeColour(valid)).toBe(true);
  expect(checkEyeColour(invalid)).toBe(false);
});

test("validates passport id", () => {
  const valid = "000000001";
  const invalid = "0123456789";

  expect(checkPassportId(valid)).toBe(true);
  expect(checkPassportId(invalid)).toBe(false);
});
