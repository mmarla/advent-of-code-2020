const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

const readFile = async (path) => {
  const data = await readFileAsync(path, "utf8");

  return data.split("\n");
};

const readFileToArrStr = (path) => fs.readFileSync(path, "utf-8").split("\n");

const readFileToArrObj = (path) =>
  fs
    .readFileSync(path, "utf-8")
    .split("\n\n")
    .map((e) => e.split(/\s/))
    .map((e) =>
      e.reduce((acc, field) => {
        const [key, value] = field.split(":");
        return { ...acc, [key]: value };
      }, {})
    );

module.exports = { readFile, readFileToArrObj, readFileToArrStr };
