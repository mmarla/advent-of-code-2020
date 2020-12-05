const getMinMax = (str) => ({
  min: +str.split(" ")[0].split("-")[0],
  max: +str.split(" ")[0].split("-")[1],
});

const getLetter = (str) => str.split(" ")[1].split(":")[0];

const getPassword = (str) => str.split(" ")[2];

const findValidPasswords = (data) =>
  data.reduce((acc, e) => {
    const [range, [letter], password] = e.split(" ");
    const [min, max] = range.split("-");
    const regex = new RegExp(letter.split(":"), "g");
    const instances = (password.match(regex) || []).length;

    return instances >= min && instances <= max ? (acc += 1) : acc;
  }, 0);

const findValidPasswordsByPosition = (data) =>
  data.reduce((acc, e) => {
    const [range, [letter], password] = e.split(" ");
    const [min, max] = range.split("-");
    const first = password.charAt(min - 1);
    const second = password.charAt(max - 1);

    return (first === letter && second !== letter) ||
      (first !== letter && second === letter)
      ? (acc += 1)
      : acc;
  }, 0);

module.exports = { findValidPasswords, findValidPasswordsByPosition };
