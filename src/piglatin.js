"use strict";

const translate = (stringParam) => {
  stringParam = stringParam.toLowerCase();

  //first letter is a vowel
  const vowels = "aeiouAEIOU";

  if (vowels.includes(stringParam[0])) {
    let piglatin = stringParam + "way";
    return piglatin;
  } else {
    if (!vowels.includes(stringParam[1])) {
      let firstTwoLetters = stringParam.slice(0, 2);
      let restOfString = stringParam.slice(2);
      return restOfString + firstTwoLetters + "ay";
    } else {
      //first was consonant
      let firstLetter = stringParam[0];
      let restOfString = stringParam.slice(1); //starts at included
      return restOfString + firstLetter + "ay";
    }
  }
};

module.exports = translate;
