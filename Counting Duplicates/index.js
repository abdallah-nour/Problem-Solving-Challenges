function duplicateCount(text = "") {
  return Object.values(countCharsRedundancy(text)).reduce((acc, current) => current > 1 ? acc + 1 : acc, 0)
}

function countCharsRedundancy(str) {
  const chars = {};
  str.toLowerCase().split("").map((char) => {
    chars[char] = chars[char] === undefined ? 1 : 1 + chars[char];
  });
  return chars;
}

// 🚀 short code 
duplicateCount = (text) => text.toLowerCase().split("").sort().join("").match(/([^])\1+/gi)?.length || 0;

module.exports = duplicateCount;
