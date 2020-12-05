const validators = require("./helpers");

const mandatory = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const optional = "cid";

const checkRequired = (passport) =>
  mandatory.reduce((valid, key) => (!passport[key] ? false : valid), true);

const checkValues = (passport) =>
  Object.keys(passport)
    .filter((key) => key !== optional)
    .reduce((acc, key) => {
      const valid = validators[key](passport[key]);

      if (!valid) {
        return false;
      }

      return acc;
    }, true);

const checkRequiredFields = (data) => data.filter(checkRequired).length;

const checkValidInputs = (data) =>
  data.filter(checkRequired).filter(checkValues).length;

module.exports = {
  checkRequiredFields,
  checkValidInputs,
};
