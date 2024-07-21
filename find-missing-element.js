/**
 * Function to find the missing element in an array of integers.
 * @param {number[]} arr - An array of consecutive integers with one element missing.
 * @return {number} The missing integer.
 */
function findMissingElement(arr) {
  // Calculate the expected sum of the sequence using the formula for the sum of an arithmetic series
  const n = arr.length + 1; // Including the missing element
  const expectedSum = (n * (n + 1)) / 2;
  
  // Calculate the actual sum of the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
  // The missing element is the difference between the expected sum and the actual sum
  const missingElement = expectedSum - actualSum;
  
  return missingElement;
}

// Example usage
const arr = [1, 2, 4, 5, 6]; // The missing element is 3
console.log(findMissingElement(arr)); // Output: 3