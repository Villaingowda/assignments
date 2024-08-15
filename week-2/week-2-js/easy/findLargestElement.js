/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(array) {
    // Step 1: Initialize a variable to store the largest element
    let largestElement = array[0];
    
    // Step 2: Iterate over the array of numbers
    for (let i = 1; i < array.length; i++) {
        // Step 2a: Check if the current number is greater than the largest element
        if (array[i] > largestElement) {
        // Step 2b: Update the largest element if the current number is greater
        largestElement = array[i];
        }
    }
    
    // Step 3: Return the largest element
    return largestElement;
    
}

module.exports = findLargestElement;