/*
 * Name to Initials Conversion
 *
 * Rules:
 * 1. A single-word name must return the first two letters of the word as initials.
 *    Eg. "John" should return "JO"
 * 2. A two-word name must return the first letter of each word as initials.
 *    Eg. "John Doe" should return "JD"
 * 3. A name with more than two words must return the starting letter of the first and last word as initials.
 *    Eg. "John Doe Honai" should return "JH"
 * 4. All initials should be in uppercase.
 * 
 * Implementation:
 * - The function splits the name into words and applies the conditions based on the number of words.
 * - Test cases have been included to verify functionality.
 *
 * Written By: Preet Kulkarni
 *
 */

let createInitialsFromName = (name) => {
  let words = name.split(" ");
  let result = "";

  // Handle empty input
  if (words.length === 0) {
    return result;
  }

  // Single-word name: return first two letters
  if (words.length === 1) {
    result = words[0].substring(0, 2).toUpperCase();
  }
  // Two-word name: return first letter of each word
  else if (words.length === 2) {
    result = words[0][0].toUpperCase() + words[1][0].toUpperCase();
  }
  // More than two words: return first letter of first and last word
  else {
    result = words[0][0].toUpperCase() + words[words.length - 1][0].toUpperCase();
  }

  return result;
};

// Test cases to validate functionality

console.log(createInitialsFromName("John"));                // JO
console.log(createInitialsFromName("John Doe"));            // JD
console.log(createInitialsFromName("John Doe Honai"));      // JH
console.log(createInitialsFromName("Alice"));               // AL
console.log(createInitialsFromName("Alice IN Wonderland"));    // AIW
console.log(createInitialsFromName(""));                    // "" (Empty string)
console.log(createInitialsFromName("One More Name Here"));  // OH
