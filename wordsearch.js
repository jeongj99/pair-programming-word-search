const wordSearch = (letters, word) => {
  if (typeof word !== 'string') {
    throw new Error('Pass a string for word.');
  }
  if (word === "") {
    return false;
  }
  const transposedLetters = letters[0].map((_, columnIndex) => letters.map(row => row[columnIndex]));
  const verticalJoin = transposedLetters.map(el => el.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const v of verticalJoin) {
    let reverseV = v.split("").reverse().join("");
    if (v.includes(word) ||
      reverseV.includes(word)) return true;
  }

  for (const h of horizontalJoin) {
    let reverseH = h.split("").reverse().join("");
    if (h.includes(word) ||
      reverseH.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;