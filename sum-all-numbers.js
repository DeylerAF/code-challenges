/**
 * Function to calculate the sum of all numbers in an array
 * @param {number[]} numbers - An array of numbers
 * @returns {number} - The sum of all the numbers in the array
 */
/* function sumArray(numbers) {
  // Initialize a variable to store the sum
  let sum = 0;

  // Iterate over the array and add each number to the sum
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }

  // Return the total sum
  return sum;
} */

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const totalSum = sumArray(array);
console.log(totalSum); // Output: 15
