const countAnswers = (data) =>
  data.reduce((acc, e) => {
    const uniques = [...new Set([...e])].length;

    return (acc += uniques);
  }, 0);

const countUnanimous = (groups) =>
  groups.reduce((acc, group) => {
    const answers = group.reduce((acc, person) => {
      [...person].forEach((answer) => {
        if (!acc[answer]) acc[answer] = 0;

        return {
          ...acc,
          [answer]: (acc[answer] += 1),
        };
      });

      return acc;
    }, {});

    return (acc += Object.values(answers).filter(
      (value) => value === group.length
    ).length);
  }, 0);

module.exports = { countAnswers, countUnanimous };
