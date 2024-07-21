/**
 * Function to find palindromes in an array of strings
 * @param {string} input - The string from which vowels will be removed
 * @returns {boolean} - If is palindrome return true, else false
 */

/* const isPalindrome = str => {
  str = str.replace(/\s/g, '');
  const lowered = str.toLowerCase();
  const splitted = lowered.split('');
  const reversed = splitted.reverse();
  const joined = reversed.join('');
  return lowered === joined;
}; */

/* const isPalindrome = str => {
  str = str.replace(/\s/g, '');
  const lowered = str.toLowerCase();
  const reversed = lowered.split('').reverse().join('');
  return lowered === reversed;
}; */

const isPalindrome = str => {
  const processedStr = str.replace(/\s/g, '').toLowerCase();
  const palindrome = processedStr.split('').reverse().join('');
  return processedStr === palindrome;
};

// Example usage:
const input = isPalindrome("Do geese see God");
console.log(str); // true