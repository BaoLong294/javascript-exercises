const permutations = function (array) {
  if (array.length == 0) return [[]];

  let result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const rest = array.filter((_, index) => index != i);
    const perms = permutations(rest);
    const joined = perms.map((perm) => [element].concat(perm));
    result = result.concat(joined);
  }

  return result;
};

// Do not edit below this line
module.exports = permutations;
