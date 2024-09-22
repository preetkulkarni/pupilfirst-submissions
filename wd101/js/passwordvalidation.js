/*
 * Password Validation Check
 * 
 * Rules:
 * 1. Both the passwords entered by the user should match.
 * 2. Password length must be equal to or above 8 characters long
 * 3. Passwords must be a combination of uppercase letters, lowercase letters, numbers, and symbols.
 * 
 * Implementation:
 * - The function compares two passwords to check if they match and satisfy the given conditions.
 * - Test cases have been included to verify functionality.
 * 
 * Written By: Preet Kulkarni
 * 
 * 
 */

// Test passwords
let pass1 = "aBcD$123"; 
let pass2 = "aBcD$124"; // not matching
let pass3 = "aBcD&12";// incorrect length
let pass4 = "abcd1234";  // no special characters
let goodpass = "aBcD&123"; // valid password

// Function to validate passwords
function validatePassword(pass1, pass2) {
    // Check if passwords match
    if (pass1 !== pass2) {
        return "Passwords do not match.";
    }

    // Check length
    if (pass1.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    // Check for at least one uppercase letter, one lowercase letter, one number, and one symbol
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    const number = /\d/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!upperCase.test(pass1) || !lowerCase.test(pass1) || !number.test(pass1) || !specialChar.test(pass1)) {
        return "Password must contain uppercase letters, lowercase letters, numbers, and symbols.";
    }

    return "Password is valid!";
}

// Testing the passwords
console.log(validatePassword(pass1, pass2)); // Not matching
console.log(validatePassword(pass3, pass3)); // Incorrect length
console.log(validatePassword(pass4, pass4)); // No special characters

console.log(validatePassword(goodpass, goodpass)); // Valid password
