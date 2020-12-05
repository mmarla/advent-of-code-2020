const { readFileSync } = require("fs");

const parser = (path) =>
  readFileSync(path, "utf-8")
    .split("\n\n")
    .map((e) => e.split(/\s/))
    .map((e) =>
      e.reduce((acc, field) => {
        const [key, value] = field.split(":");
        return { ...acc, [key]: value };
      }, {})
    );

module.exports = parser;
