/**
 * Function to find the second highest number in an array of integers.
 * @param {number[]} arr - Array of integers.
 * @returns {number|null} - The second highest number, or null if it doesn't exist.
 */
function findSecondHighest(arr) {
  if (arr.length < 2) {
      return null; // Not enough elements to have a second highest number
  }

  let first = -Infinity, second = -Infinity;

  for (let num of arr) {
      if (num > first) {
          second = first;
          first = num;
      } else if (num > second && num < first) {
          second = num;
      }
  }

  return second === -Infinity ? null : second;
}

// Example usage:
const numbers = [3, 5, 7, 1, 9, 8,];
const secondHighest = findSecondHighest(numbers);
console.log(secondHighest); // Output: 8