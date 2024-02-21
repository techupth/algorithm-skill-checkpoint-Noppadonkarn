// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

//ex1
export const palindrome = (str) => {
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
};

console.log(palindrome("abba"));
console.log(palindrome("abcdefg"));



