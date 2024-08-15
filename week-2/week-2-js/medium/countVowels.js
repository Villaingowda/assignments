/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Step 1: Initialize a variable to store the count of vowels
  let count = 0;
  
  // Step 2: Convert the input string to lowercase to handle uppercase vowels
  const lowerCaseStr = str.toLowerCase();
  
  // Step 3: Iterate over each character in the string
  for (let i = 0; i < lowerCaseStr.length; i++) {
    // Step 3a: Check if the current character is a vowel
    if (lowerCaseStr[i] === 'a' || lowerCaseStr[i] === 'e' || lowerCaseStr[i] === 'i' || lowerCaseStr[i] === 'o' || lowerCaseStr[i] === 'u') {
      // Step 3b: Increment the count if the current character is a vowel
      count++;
    }
  }
  
  // Step 4: Return the total count of vowels
  return count;



}

module.exports = countVowels;