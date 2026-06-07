const factorial = function (n) {
  if (Number.isInteger(n)) {
    if (n < 0) return undefined;
    else if (n == 0) return 1;
    else return n * factorial(n - 1);
  } else {
    return undefined;
  }
};

// Do not edit below this line
module.exports = factorial;
