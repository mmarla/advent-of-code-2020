const { byr, hgt, hcl, ecl, pid } = require("../helpers");

test("validates birth year", () => {
  const valid = "2002";
  const invalid = "2003";

  expect(byr(valid)).toBe(true);
  expect(byr(invalid)).toBe(false);
});

test("validates height", () => {
  const valid1 = "60in";
  const valid2 = "190cm";
  const invalid1 = "190in";
  const invalid2 = "190";
  const invalid3 = "100cm";

  expect(hgt(valid1)).toBe(true);
  expect(hgt(valid2)).toBe(true);
  expect(hgt(invalid1)).toBe(false);
  expect(hgt(invalid2)).toBe(false);
  expect(hgt(invalid3)).toBe(false);
});

test("validates hair color", () => {
  const valid = "#123abc";
  const invalid1 = "#123abz";
  const invalid2 = "123abc";

  expect(hcl(valid)).toBe(true);
  expect(hcl(invalid1)).toBe(false);
  expect(hcl(invalid2)).toBe(false);
});

test("validates eye color", () => {
  const valid = "brn";
  const invalid = "wat";

  expect(ecl(valid)).toBe(true);
  expect(ecl(invalid)).toBe(false);
});

test("validates passport id", () => {
  const valid = "000000001";
  const invalid = "0123456789";

  expect(pid(valid)).toBe(true);
  expect(pid(invalid)).toBe(false);
});
