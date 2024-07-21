/**
 * __define-ocg__: Function that capitalizes all the words in a given string.
 * @param {string} str - The input string.
 * @returns {string} - The input string with each word capitalized.
 */
/* function capitalizeWords(str) {
  let varOcg = str.split(' ');
  for (let i = 0; i < varOcg.length; i++) {
      varOcg[i] = varOcg[i].charAt(0).toUpperCase() + varOcg[i].slice(1).toLowerCase();
  }
  return varOcg.join(' ');
} */

/* function capitalizeWords(str) {
    return str.replace(/(?:^|\s)\S/g, match => match.toUpperCase());
} */

function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// Example usage:
const inputString = "hello world! this is a test.";
const result = capitalizeWords(inputString);
console.log(result); // Output: "Hello World! This Is A Test."