/**
 * Function to check if a string starts and ends with the same vowel
 * @param {string} input - It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
 * @returns {boolean} - true if 'input' starts and ends with the same vowel. Otherwise false
 */


/* function regexVar(input) {
  const regex = /^[aeiouAEIOU](.*)[aeiouAEIOU]$/;
  if (input.length === 0) return false;

  const match = input.match(regex);
  if (!match) return false;

  const firstVowel = match[0].charAt(0).toLowerCase();
  const lastVowel = match[0].charAt(match[0].length - 1).toLowerCase();

  const re = firstVowel === lastVowel;

  return re;
}

// Example usage:
const str = "abcdaeA";
const result = regexVar(str);
console.log(result); // Output: false */

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiouAEIOU]).*\1$/;

    /*
     * Do not remove the return statement
     */
    return re;
}

// Example usage
const re = regexVar();
console.log(re.test('ada')); // true
console.log(re.test('apple')); // false
console.log(re.test('orange')); // false
console.log(re.test('Umbrella')); // false
console.log(re.test('Echoe')); // false
console.log(re.test('a')); // false
console.log(re.test('A')); // false
