const getMinMax = (str) => ({
  min: +str.split(" ")[0].split("-")[0],
  max: +str.split(" ")[0].split("-")[1],
});

const getLetter = (str) => str.split(" ")[1].split(":")[0];

const getPassword = (str) => str.split(" ")[2];

const findValidPasswords = (data) =>
  data.reduce((acc, e) => {
    const range = getMinMax(e);
    const letter = getLetter(e);
    const password = getPassword(e);
    const regex = new RegExp(letter, "g");
    const instances = (password.match(regex) || []).length;

    if (instances >= range.min && instances <= range.max) {
      acc++;
    }
    return acc;
  }, 0);

const findValidPasswordsByPosition = (data) =>
  data.reduce((acc, e) => {
    const positions = getMinMax(e);
    const letter = getLetter(e);
    const passwordArr = getPassword(e).split("");
    const firstPosition = passwordArr[positions.min - 1];
    const secondPosition = passwordArr[positions.max - 1];

    if (firstPosition === letter && secondPosition !== letter) {
      acc++;
    } else if (firstPosition !== letter && secondPosition === letter) {
      acc++;
    }

    return acc;
  }, 0);

module.exports = { findValidPasswords, findValidPasswordsByPosition };
