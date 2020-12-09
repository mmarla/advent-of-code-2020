const parse = (data) =>
  data.map((e) => {
    const [rule, value] = e.split(" ");
    return {
      [rule]: Number(value),
    };
  });

const countAcc = (data) => {
  let instructions = parse(data);
  let acc = 0;
  let i = 0;
  let stop = false;

  while (!stop && i < instructions.length) {
    const instruction = instructions[i];
    const [key] = Object.keys(instruction);
    const value = instruction[key];
    const { seen } = instruction;

    if (seen) {
      stop = true;
    } else {
      instructions[i].seen = true;

      if (key === "nop") {
        i += 1;
      }
      if (key === "acc") {
        acc += value;
        i += 1;
      }
      if (key === "jmp") {
        i += value;
      }
    }
  }

  return { acc, naturalEnd: !stop };
};

const fixProgram = (data) => {
  const instructions = parse(data);
  const nopOrJump = instructions
    .map((instruction, i) => ({ ...instruction, index: i }))
    .filter(
      (instruction) =>
        Object.keys(instruction)[0] === "nop" ||
        Object.keys(instruction)[0] === "jmp"
    );

  console.log(nopOrJump);
};

module.exports = { countAcc, fixProgram };
