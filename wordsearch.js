//program paired with Hanvid Lee

const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  for (let i = 0; i < letters[0].length; i++) {
    let verticalJoin = '';
    for (let j = 0; j < letters.length; j++) {
      verticalJoin += letters[j][i];
    }
    if (verticalJoin.includes(word)) {
      return true;
    }

    // const verticalJoin = letters[0].map((col, i) => letters.map(row => row[i]).join(''));
    // if (verticalJoin.some(str => str.includes(word))) {
    //   return true;}

  };
  return false;
};


module.exports = wordSearch;