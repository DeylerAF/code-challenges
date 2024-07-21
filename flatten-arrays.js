/**
 * Flatten an array of arrays
 * @param {Array} arr - The array to flatten
 * @returns {Array} - The flattened array
*/

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), []);
const arr = [[1, 2], [[3, 4]], [5, 6], 7, [8, []]];
const f = flatten(arr);
console.log(f); // [1, 2, [3, 4], 5, 6, 7, 8, []]