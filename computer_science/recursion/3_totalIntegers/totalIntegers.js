const totalIntegers = function (input) {
  let total = 0;

  const values = Object.values(input);

  for (let value of values) {
    if (Number.isInteger(value)) total++;
    if (Array.isArray(value) || typeof value == "object")
      total += totalIntegers(value);
  }

  return total;
};

// Do not edit below this line
module.exports = totalIntegers;
