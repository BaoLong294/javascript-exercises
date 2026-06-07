const contains = function (object, searchValue) {
  const values = Object.values(object);

  for (let value of values) {
    if (value == searchValue) return true;
    if (typeof value == "object" && contains(value, searchValue)) return true;
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
