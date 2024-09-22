/*
 * Checking if passphrase is valid
 *
 * Rules:
 * 1. There should be a minimum of 4 words in the passphrase
 * 2. There should be a minimum of 2 characters in each word
 * 3. Function should return a boolean value - true if the supplied string is a valid passphrase and false if it is not
 * 
 * Implementation:
 * - The function splits the name into words and applies the conditions based on the number of words and number of characters in each word.
 * - Test cases have been included to verify functionality.
 *
 * Written by: Preet Kulkarni
 */

let isValidPassphrase = (text) => {

  //splitting string into words using space
  let words = text.split(" ");

  //setting minimum lengths and initial condition
  let conditionsSatisfied = false;
  let minimumWords = 4;
  let minimumWordLength = 2;

  //checking if there are atleast 4 words in string
  if (words.length >= minimumWords) 
  {
      //checking if each word has a minimum of 2 characters
      let minimumTwoCharsEach = words.every(word => word.length >= 2);

      if (minimumTwoCharsEach) 
      {
          conditionsSatisfied = true;
          return conditionsSatisfied;
      }
  }

  conditionsSatisfied = false;
  return conditionsSatisfied;
};

//Test cases
console.log(isValidPassphrase("this is not a valid passphrase"));  // false (a word has less than 2 characters)
console.log(isValidPassphrase("too short"));                   // false (less than 4 words)
console.log(isValidPassphrase("this one is definitely valid"));  // true 
console.log(isValidPassphrase("another valid phrase here"));   // true