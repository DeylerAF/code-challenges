/**
 * Function to remove vowels from a given string
 * @param {string} input - The string from which vowels will be removed
 * @returns {string} - The string without vowels
 */
function removeVowels(input) {
  const str = input.replace(/[aeiouAEIOU]/g, '')
  return str
}

// Example usage:
const result = removeVowels('Hello, World!')
console.log(result) // "Hll, Wrld!"
