const parseRules = (rules) =>
  rules.reduce((acc, rule) => {
    const [first, second] = rule.split(" contain ");
    const [outer] = first.match(/([\w]+ [\w]+)/);
    const inner = second.split(", ").map((rule) => {
      const [, , colour] = rule.match(/(\d+) ([\w]+ [\w]+)/) || [];
      return colour;
    });

    return { ...acc, [outer]: second.includes("no other") ? [] : inner };
  }, []);

const searchBag = (contents, bags, colour) => {
  if (contents.length < 1) {
    return;
  }

  if (contents.find((e) => e === "shiny gold")) {
    return colour;
  }

  const [newContents] = contents.map((e) => bags[e]);

  return searchBag(newContents, bags, colour);
};

const countOuterBags = (data) => {
  const bags = parseRules(data);

  const searchBags = Object.keys(bags).map((colour) => {
    const contents = bags[colour];

    return searchBag(contents, bags, colour);
  });

  return searchBags.filter((e) => e !== undefined).length;
};

module.exports = { countOuterBags };
