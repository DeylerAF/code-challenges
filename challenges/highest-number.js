/**
 * Function to find the second highest number in an array of integers.
 * @param {number[]} arr - Array of integers.
 * @returns {number|null} - The second highest number, or null if it doesn't exist.
 */

/* function findHighest(arr) {
  let highest = -Infinity;

  for (let num of arr) {
    if (num > highest) {
      highest = num;
    }
  }

  return highest
} */

const findHighest = (arr) => arr.reduce((acc, el) => (acc > el ? acc : el))

// Example usage:
const numbers = [3, 5, 7, 1, 9, 8]
const result = findHighest(numbers)
console.log(result) // Output: 9
