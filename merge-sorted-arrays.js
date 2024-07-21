/**
 * Merges two sorted arrays into one sorted array
 * @param {number[]} arr1 - First sorted array
 * @param {number[]} arr2 - Second sorted array
 * @return {number[]} Merged and sorted array
 * __define-ocg__
 */
/* function mergeSortedArrays(arr1, arr2) {
    let mergedArray = []; // __define-ocg__ Array to store the merged result
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Merge the arrays until one of them is exhausted
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add any remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add any remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
} */

function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

// Example usage:
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
let varOcg = mergeSortedArrays(array1, array2);
console.log(varOcg); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
