/**
 * Clean an array of all null, undefined or 0 values
 * @param {Array} arr - The array to clean null, undefined or 0 values
 * @returns {Array} - The cleaned array
 */

const clean = (arr) =>
  arr.reduce((acc, el) => {
    if (el) {
      acc.push(el)
    }
    return acc
  }, [])

// Example usage:
const c = clean([1, 0, null, undefined, 5, 6])
console.log(c) // [1, 5, 6]
