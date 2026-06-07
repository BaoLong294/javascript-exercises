const pascal = function (n) {
  if (n == 1) return [1];

  let result = [];

  const prevRow = pascal(n - 1);
  const paddedRow = [0].concat(prevRow).concat([0]);

  for (let i = 0; i < paddedRow.length - 1; i++) {
    result.push(paddedRow[i] + paddedRow[i + 1]);
  }

  return result;
};

// Do not edit below this line
module.exports = pascal;
