const {
  checkBirthYear,
  checkIssueYear,
  checkExpYear,
  checkHeight,
  checkHairColour,
  checkEyeColour,
  checkPassportId,
} = require("./validators");

const mandatory = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const mapped = {
  byr: checkBirthYear,
  iyr: checkIssueYear,
  eyr: checkExpYear,
  hgt: checkHeight,
  hcl: checkHairColour,
  ecl: checkEyeColour,
  pid: checkPassportId,
};

const checkRequiredFields = (passport) =>
  mandatory.reduce((valid, key) => {
    if (!passport[key]) {
      valid = false;
    }

    return valid;
  }, true);

const checkValues = (passport) =>
  Object.keys(passport)
    .filter((key) => key !== "cid")
    .reduce((acc, key) => {
      const valid = mapped[key](passport[key]);

      if (!valid) {
        acc = false;
      }

      return acc;
    }, true);

const listPassportsWithAllFields = (passports) =>
  passports.filter((passport) => {
    const hasRequiredFields = checkRequiredFields(passport);
    return hasRequiredFields ? true : false;
  });

const listPassportsWithCorrectValues = (passports) =>
  passports.filter((passport) => {
    const hasCorrectValue = checkValues(passport);
    return hasCorrectValue ? true : false;
  });

const transformToObjects = (str) =>
  str.split(" ").reduce((acc, field) => {
    const [key, value] = field.split(":");
    return { ...acc, [key]: value };
  }, {});

const parse = (arr) => {
  let passports = [];
  let passport = {};

  arr.push("");

  arr.forEach((line) => {
    if (line !== "") {
      passport = { ...passport, ...transformToObjects(line) };
    } else {
      passports.push(passport);
      passport = {};
    }
  });

  return passports;
};

const checkPassportsWithRequiredFields = (data) =>
  listPassportsWithAllFields(parse(data)).length;

const checkPassportsWithValidInputs = (data) =>
  listPassportsWithCorrectValues(listPassportsWithAllFields(parse(data)))
    .length;

module.exports = {
  checkPassportsWithRequiredFields,
  checkPassportsWithValidInputs,
};
