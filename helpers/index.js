const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

const readFile = async (path) => {
  const data = await readFileAsync(path, "utf8");

  return data.split("\n");
};

module.exports = readFile;
