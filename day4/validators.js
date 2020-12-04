const checkBirthYear = (year) =>
  year.length === 4 && Number(year) >= 1920 && Number(year) <= 2002;

const checkIssueYear = (year) =>
  year.length === 4 && Number(year) >= 2010 && Number(year) <= 2020;

const checkExpYear = (year) =>
  year.length === 4 && Number(year) >= 2020 && Number(year) <= 2030;

const checkHeight = (height) => {
  const [number, unit] = height.match(/[a-z]+|[^a-z]+/gi);

  if (unit === "cm") {
    return Number(number) >= 150 && Number(number) <= 193;
  }

  if (unit === "in") {
    return Number(number) >= 59 && Number(number) <= 76;
  }

  return false;
};

const checkHairColour = (str) => {
  if (str.length < 7) return false;

  return str.match(/^#(([0-9]||[a-f]){6})$/) ? true : false;
};

const checkEyeColour = (str) => {
  const values = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

  return values.find((colour) => colour === str) ? true : false;
};

const checkPassportId = (str) => (str.match(/^[0-9]{9}$/) ? true : false);

module.exports = {
  checkBirthYear,
  checkIssueYear,
  checkExpYear,
  checkHeight,
  checkHairColour,
  checkEyeColour,
  checkPassportId,
};
