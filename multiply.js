/**
 * Function to multiply to number without using the * operator
 * @param {number[]} numbers - An array of numbers
 * @returns {number} - The sum of all the numbers in the array
 */

//Not work with negative numbers
/* function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
} */

/* function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < Math.abs(b); i++) {
    result += a;
  }
  if (b < 0) {
    result = -result;
  }
  return result;
} */

const multiply = (a, b) => {
    let result = 0;
    const absNum = Math.abs(b) == b;
    for (let i = 0; i < Math.abs(b); i++) {
      result = absNum ? result + a : result - a;
    }
    return result;
}

// Example usage:
const product = multiply(50, -30);
console.log(product); // Output: -1500