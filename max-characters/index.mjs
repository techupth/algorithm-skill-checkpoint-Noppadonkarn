// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const stringSplit = str.toLowerCase().split('');
  const checkArray = [];
  let maxCharacters = null;

  for (let i = 0; i < stringSplit.length; i++) {
    let haveInArray = false;

    for (let j = 0; j < checkArray.length; j++) {
      if (stringSplit[i] === checkArray[j].characters) {
        checkArray[j].number += 1;
        haveInArray = true;
      }
    }

    if (!haveInArray) {
      checkArray.push({ characters: stringSplit[i], number: 1 });
    }
  }

  for (let i = 0; i < checkArray.length; i++) {
    if (i === 0) {
      maxCharacters = checkArray[i].characters;
    } else if (checkArray[i].number > checkArray[i - 1].number) {
      maxCharacters = checkArray[i].characters;
    }
  }

  return maxCharacters;
};

console.log(getMaxCharacters("abracadabra"));
console.log(getMaxCharacters("apple 1231111"));