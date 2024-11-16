/**
 * FizzBuzz
 * Write a program that outputs the string representation of numbers from 1 to n.
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
 * For numbers which are multiples of both three and five output “FizzBuzz”.
 * @param {number} n - The number to count up to
 * @returns {Array} - The array of strings
 */

const fizzBuzz = (n) => {
  const result = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push(`${i} - (FizzBuzz)`)
    } else if (i % 3 === 0) {
      result.push(`${i} - (Fizz)`)
    } else if (i % 5 === 0) {
      result.push(`${i} - (Buzz)`)
    } else {
      result.push(i.toString())
    }
  }
  return result
}
console.log(fizzBuzz(15)) // [ '1', '2', '3 - (Fizz)', '4', '5 - (Buzz)', '6 - (Fizz)', '7', '8', '9 - (Fizz)', '10 - (Buzz)', '11', '12 - (Fizz)', '13', '14', '15 - (FizzBuzz)' ]
