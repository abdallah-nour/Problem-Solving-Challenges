function getStrings(city = "") {
  const arr = city.toLowerCase().split(" ").join("").split("");
  const charsRedundancy = {};
  arr.map(value => charsRedundancy[value] = charsRedundancy[value] ? charsRedundancy[value] + 1 : 1);
  return [...new Set(arr)]
    .map(char => `${char}:${addAsterisks(charsRedundancy[char])}`)
    .join(",");
}

function addAsterisks(numberOfAsterisks) {
  return "".padEnd(numberOfAsterisks, "*");
}
