/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Step 1: Convert the input string to lowercase to handle case-insensitivity and remove spaces and punctuation
  const lowercaseStr = str.toLowerCase();
  // Step 2: Filter out spaces and punctuation from the string
  const filteredStr = lowercaseStr.split('').filter((char) => (char !== '?' && char !== ' ' && char !== '!' && char !== '.' && char !== ',')).join('');
  // Step 3: Reverse the filtered string and compare it with the original string
  const reversedStr = filteredStr.split('').reverse().join('');
  // Step 4: Return true if the filtered string is equal to the reversed string, otherwise return false
  return filteredStr === reversedStr;
 
}

module.exports = isPalindrome;
