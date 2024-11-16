/**
 * Find the repeated word in a string
 * @param {string} input - The string to search for repeated words
 * @returns {string} - The repeated word
 */

// Returns the most repeated word
const repeatedWords = (str) => {
  const lowered = str.toLowerCase()
  const splitted = lowered.split(' ')
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }
    return acc
  }, {})
  return Object.entries(reduced).reduce((acc, el) =>
    acc[1] > el[1] ? acc : el
  )
}

// Returns the repeated words
/* const repeatedWords = str => {
  const lowered = str.toLowerCase();
  const splitted = lowered.split(' ');
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  const filtered = Object.entries(reduced)
    .filter(([word, count]) => count > 1)
    .reduce((acc, [word, count]) => {
      acc[word] = count;
      return acc;
    }, {});
  return filtered;
}; */

// Example usage:
const input = 'hello world hello world'
console.log(repeatedWords(input)) // ["hello", "world"]
